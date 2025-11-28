"use client";

import { useState, useEffect } from "react";
import { PencilLine, X, User } from "lucide-react";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import useAppContext from "@/context";
import { PaystackButton } from "react-paystack";

interface ModalProps {
  message: string;
  onClose: () => void;
}
const AlertModal: React.FC<ModalProps> = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-red-600">Error</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
      </div>
      <p className="mb-6 text-gray-700">{message}</p>
      <button
        onClick={onClose}
        className="w-full px-4 py-2 bg-[#37445A] text-white rounded hover:bg-opacity-90 transition-colors"
      >
        Close
      </button>
    </div>
  </div>
);

interface ProfileFormState {
  full_name: string;
  phone: string;
  department: string;
  forum: string;
  level: string;
  address: string;
  paymentStatus: string;
}

export default function ProfilePage() {
  const router = useRouter();
  // Using the renamed type SupabaseUser
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [formFromDb, setFormFromDb] = useState<ProfileFormState>({
    full_name: "",
    phone: "",
    department: "",
    forum: "",
    level: "",
    address: "",
    paymentStatus: "",
  });
  const [form, setForm] = useState<ProfileFormState>({
    full_name: "",
    phone: "",
    department: "",
    forum: "",
    level: "",
    address: "",
    paymentStatus: "",
  });
  const amount = 200000; // Amount in kobo (e.g., 200000 kobo = 2000 NGN)
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  const { setUserIsLoggedIn } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorModal, setErrorModal] = useState<string | null>(null); // State for custom alert

  // Load user data and form state
  useEffect(() => {
    async function loadProfileFromDb(email?: string, id?: string) {
      if (!email && !id) return;
      const q = email
        ? `?email=${encodeURIComponent(email)}`
        : `?id=${encodeURIComponent(id as string)}`;
      const res = await fetch(`/api/profile${q}`);
      if (!res.ok) {
        console.error("Failed to load profile", await res.text());
        return;
      }
      const profile = await res.json();
      setFormFromDb((f) => ({ ...f, ...profile }));
    }
    loadProfileFromDb(user?.email, user?.id);
  }, [user]);
  useEffect(() => {
    if (formFromDb.paymentStatus === "Paid") {
      handleSave();
    }
  }, [formFromDb.paymentStatus]);
  useEffect(() => {
    async function loadUser() {
      try {
        const supabase = createClient();
        const {
          data: { user: u },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("Supabase getUser error:", error);
        }

        if (!u) {
          console.warn("No user found, redirecting to login.");
          router.push("/login");
          return;
        }
        setUser(u);
        setUserIsLoggedIn(true);
        setForm({
          full_name: (u.user_metadata as any)?.full_name || "",
          phone: (u.user_metadata as any)?.phone || "",
          address: (u.user_metadata as any)?.address || "",
          department: (u.user_metadata as any)?.department || "",
          forum: (u.user_metadata as any)?.forum || "",
          level: (u.user_metadata as any)?.level || "",
          paymentStatus: (u.user_metadata as any)?.paymentStatus || "",
        });
      } catch (err) {
        console.error("Unexpected error in loadUser:", err);
      }
    }
    loadUser();
  }, [router]);

  async function handleSave() {
    if (!user) return;
    setSaving(true);
    // Assuming createClient() now correctly returns a client-side Supabase instance.
    const supabase = createClient();
    // 1. Update Auth Metadata
    const { error: authErr } = await supabase.auth.updateUser({
      data: {
        full_name: form.full_name,
        phone: form.phone,
        address: form.address,
        department: form.department,
        forum: form.forum,
        paymentStatus: form.paymentStatus,
      },
    });

    if (authErr) {
      console.error("Error updating user auth metadata:", authErr);
      setErrorModal("Failed to update profile: Authentication error.");
      setSaving(false);
      return;
    }

    // call server route to upsert DB record
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: user.id,
        email: user.email,
        ...form,
      }),
    });

    if (!res.ok) {
      setErrorModal("Failed to save profile to database.");
      setSaving(false);
      return;
    } else {
      alert("Succesfully saved profile to database");
    }

    setSaving(false);
    setIsEditing(false);
  }

  const componentProps = {
    email: user?.email || "",
    amount,
    publicKey,
    text: "Pay Now",
    metadata: {
      name: form.full_name,
      phone: form.phone,
      // Pass additional user details to be available on the receipt
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: form.full_name,
        },
        { display_name: "Level", variable_name: "level", value: form.level },
        { display_name: "Forum", variable_name: "forum", value: form.forum },
      ],
    },
    onSuccess: (reference: any) => {
      // 1. Update payment status in the form state
      setForm((f) => ({ ...f, paymentStatus: "Paid" }));

      // 2. Prepare all data for the receipt page
      const receiptData = {
        ...reference,
        full_name: form.full_name,
        level: form.level,
        forum: form.forum,
        email: user?.email || "",
      };

      // 3. Construct the URL for the receipt page with all details
      const query = new URLSearchParams(receiptData).toString();
      const receiptUrl = `/receipt?${query}`;

      // 4. Redirect to the receipt page
      router.push(receiptUrl);
    },
    onClose: () => {
      // You can use the custom modal here for a better UX
      setErrorModal(
        "Payment window closed. You can try again from your profile."
      );
    },
  };

  async function handleLogout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
      setErrorModal("Failed to log out. Please try again.");
    } else {
      setUserIsLoggedIn(false);
      router.push("/login");
    }
  }

  // Handlers for input changes
  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto p-6 flex justify-center items-center h-screen">
        <div className="text-xl font-medium text-[#37445A]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {errorModal && (
        <AlertModal message={errorModal} onClose={() => setErrorModal(null)} />
      )}

      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 mt-8 sm:mt-12">
        <h1 className="text-3xl font-extrabold text-[#37445A] mb-6 sm:mb-8 border-b pb-4">
          My Profile
        </h1>

        <div className="bg-white shadow-2xl rounded-xl p-6 md:p-8 space-y-8">
          {/* --- Header Section --- */}
          <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-gray-100 shadow-inner flex-shrink-0 mx-auto sm:mx-0">
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url as string}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/112x112/A1A1AA/000000?text=User";
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full text-gray-500 bg-gray-100">
                    <User className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                )}

                {/* Floating edit button (always visible on corner) */}
                <button
                  aria-label="Change Picture"
                  onClick={() => {
                    // handle file upload or pick avatar logic
                  }}
                  className="absolute bottom-1 right-1 p-2 sm:p-2.5 bg-[#4CAF50] text-white rounded-full shadow-md hover:bg-[#388E3C] transition duration-200"
                >
                  <PencilLine className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center sm:items-end sm:ml-auto text-center sm:text-right">
              {/* <h3 className="font-semibold text-gray-700">
                Payment Status:{" "}
                <span className="font-bold text-[#37445A]">
                  {form.paymentStatus || "N/A"}
                </span>
              </h3> */}
              {form.paymentStatus !== "Paid" ? (
                <PaystackButton
                  {...componentProps}
                  className="mt-2 px-6 py-2 bg-[#4CAF50] text-white text-md font-medium rounded-lg shadow-md hover:bg-[#388E3C] transition duration-200"
                >
                  Make Payment
                </PaystackButton>
              ) : (
                <div className="mt-2 px-6 py-2 text-green-600 font-semibold border-2 border-green-500 rounded-lg bg-green-50">
                  Payment Confirmed
                </div>
              )}
            </div>
          </div>

          {/* --- Form Fields --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </span>
              <div className="relative">
                <input
                  type="text"
                  value={form.full_name}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("full_name", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                />
                {isEditing && (
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>

            {/* Email (Disabled) */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Email (Read-Only)
              </span>
              <input
                type="email"
                value={user.email || ""}
                disabled
                className="block w-full rounded-lg border-2 border-gray-200 bg-gray-100 cursor-not-allowed px-4 py-2 text-gray-500"
              />
            </label>

            {/* Phone */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Phone
              </span>
              <div className="relative">
                <input
                  type="text"
                  value={form.phone}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                />
                {isEditing && (
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>
            {/* Department */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Department
              </span>
              <div className="relative">
                <input
                  type="text"
                  value={form.department}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("department", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                />
                {isEditing && (
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>
            {/* Forum */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Forum
              </span>
              <div className="relative">
                <select
                  value={form.forum}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("forum", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                >
                  <option value="">Select a Forum</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Triumphant Family">Triumphant Family</option>
                  <option value="Golden Phoenix Family">
                    Golden Phoenix Family
                  </option>
                  <option value="Luminous Family">Luminous Family</option>
                  <option value="Excellers in Christ">
                    Excellers in Christ
                  </option>
                </select>
                {isEditing && (
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>
            {/* Level */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Level
              </span>
              <div className="relative">
                <select
                  value={form.level}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("level", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                >
                  <option value="">Select a Level</option>
                  <option value="100 Level">100 Level</option>
                  <option value="200 Level">200 Level</option>
                  <option value="300 Level">300 Level</option>
                  <option value="400 Level">400 Level</option>
                  <option value="500 Level">500 Level</option>
                </select>
                {isEditing && (
                  <PencilLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>

            {/* Address */}
            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-gray-700 mb-1 block">
                Address
              </span>
              <div className="relative">
                <textarea
                  value={form.address}
                  disabled={!isEditing}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`block w-full rounded-lg border-2 transition-all duration-150 px-4 py-2 text-gray-800 ${
                    isEditing
                      ? "border-[#37445A] focus:ring-2 focus:ring-[#37445A]/50 bg-white"
                      : "border-gray-200 bg-gray-50 cursor-not-allowed"
                  }`}
                  rows={3}
                />
                {isEditing && (
                  <PencilLine className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                )}
              </div>
            </label>
          </div>

          {/* --- Action Buttons --- */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4 pt-6 border-t">
            <div>
              {isEditing ? (
                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2 bg-[#37445A] text-white rounded-lg font-semibold shadow-lg hover:bg-[#283240] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      // Reload form data from user state if needed (not implemented here)
                    }}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold shadow-md hover:bg-gray-400 transition duration-200"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-[#37445A] text-white rounded-lg font-semibold shadow-lg hover:bg-[#283240] transition duration-200"
                >
                  Edit Profile
                </button>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:bg-red-700 transition duration-200"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
