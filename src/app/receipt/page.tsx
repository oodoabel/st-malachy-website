"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle, Printer } from "lucide-react";
import Link from "next/link";

interface TransactionDetails {
  reference: string | null;
  transaction: string | null;
  status: string | null;
  message: string | null;
  trans: string | null;
  trxref: string | null;
  full_name: string | null;
  email: string | null;
  level: string | null;
  forum: string | null;
}

const ReceiptPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [details, setDetails] = useState<TransactionDetails | null>(null);

  useEffect(() => {
    const transactionDetails: TransactionDetails = {
      reference: searchParams.get("reference"),
      transaction: searchParams.get("transaction"),
      status: searchParams.get("status"),
      message: searchParams.get("message"),
      trans: searchParams.get("trans"),
      trxref: searchParams.get("trxref"),
      full_name: searchParams.get("full_name"),
      email: searchParams.get("email"),
      level: searchParams.get("level"),
      forum: searchParams.get("forum"),
    };

    // If there's no transaction reference, it's not a valid receipt page access.
    if (!transactionDetails.reference) {
      router.push("/profile"); // or home page
      return;
    }

    setDetails(transactionDetails);
  }, [searchParams, router]);

  if (!details) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-medium text-gray-600">
          Loading receipt...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center border-b pb-6 mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">
            Payment Successful
          </h1>
          <p className="text-gray-500 mt-2">
            Thank you for your payment. Here are your transaction details.
          </p>
        </div>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg border">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Billed To:
          </h2>
          <p className="font-bold text-xl text-gray-900">{details.full_name}</p>
          <p className="text-gray-600">{details.email}</p>
          <div className="flex gap-4 mt-1 text-sm text-gray-600">
            {details.level && (
              <p>
                <span className="font-medium">Level:</span> {details.level}
              </p>
            )}
            {details.forum && (
              <p>
                <span className="font-medium">Forum:</span> {details.forum}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Transaction Status:</span>
            <span className="font-semibold text-green-600 capitalize">
              {details.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Reference ID:</span>
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {details.reference}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Message:</span>
            <span>{details.message}</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            <Printer size={20} />
            Print Receipt
          </button>
          <Link
            href="/profile"
            className="w-full sm:w-auto text-center px-6 py-3 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
