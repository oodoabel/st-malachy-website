"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

type Executive = {
  name: string;
  position: string;
  image: string;
  phone: string;
  email: string;
};

type DiscussionPost = {
  id: number;
  title: string;
  content: string;
  comments: string[];
  createdAt: string;
};

type Announcement = {
  id: number;
  message: string;
};

type Prayer = {
  id: number;
  request: string;
  createdAt: string;
};

const permittedAnnouncementEmails = [
  "john@example.com",
  "jane@example.com",
  "mary@example.com",
];

const executives: Executive[] = [
  {
    name: "John Doe",
    position: "President",
    image: "/executives/john.jpg",
    phone: "+2348012345678",
    email: "john@example.com",
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    image: "/executives/jane.jpg",
    phone: "+2348098765432",
    email: "jane@example.com",
  },
  {
    name: "Mary Johnson",
    position: "Secretary General",
    image: "/executives/mary.jpg",
    phone: "+2348076543210",
    email: "mary@example.com",
  },
];

const galleryImages: string[] = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const TriumphantFamilyPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<string>("");

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      message:
        "Stay tuned for upcoming events, hangouts, and fellowship opportunities.",
    },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState<string>("");

  const [discussionPosts, setDiscussionPosts] = useState<DiscussionPost[]>([
    {
      id: 1,
      title: "Faith in Campus Life",
      content: "How do you maintain your faith amid academic pressure?",
      comments: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Forum Hangout Ideas",
      content: "Let's brainstorm ideas for our next forum bonding session!",
      comments: [],
      createdAt: new Date().toISOString(),
    },
  ]);
  const [newDiscussion, setNewDiscussion] = useState<{
    title: string;
    content: string;
  }>({ title: "", content: "" });
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>(
    {}
  );

  const [prayerWall, setPrayerWall] = useState<Prayer[]>([
    {
      id: 1,
      request: "Pray for strength during exams.",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      request: "Pray for my sick friend in the hospital.",
      createdAt: new Date().toISOString(),
    },
  ]);
  const [newPrayer, setNewPrayer] = useState<string>("");

  const [galleryUpload, setGalleryUpload] = useState<File[]>([]);

  // For gallery image preview modal
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const cleanupOldItems = () => {
      const now = Date.now();

      setDiscussionPosts((posts) =>
        posts.filter(
          (post) => now - new Date(post.createdAt).getTime() < ONE_WEEK_MS
        )
      );

      setPrayerWall((prayers) =>
        prayers.filter(
          (prayer) => now - new Date(prayer.createdAt).getTime() < ONE_WEEK_MS
        )
      );
    };

    cleanupOldItems();

    const interval = setInterval(cleanupOldItems, 60 * 60 * 1000); // every hour

    return () => clearInterval(interval);
  }, []);

  const handleAddDiscussion = () => {
    if (newDiscussion.title && newDiscussion.content) {
      const newPost: DiscussionPost = {
        id: discussionPosts.length + 1,
        ...newDiscussion,
        comments: [],
        createdAt: new Date().toISOString(),
      };
      setDiscussionPosts([...discussionPosts, newPost]);
      setNewDiscussion({ title: "", content: "" });
      notifySubscribers("A new discussion was added!");
    }
  };

  const handleAddComment = (discussionId: number) => {
    const comment = commentInputs[discussionId];
    if (comment && comment.trim()) {
      setDiscussionPosts(
        discussionPosts.map((post) =>
          post.id === discussionId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
      setCommentInputs({ ...commentInputs, [discussionId]: "" });
    }
  };

  const handleAddPrayer = () => {
    if (newPrayer.trim()) {
      setPrayerWall([
        ...prayerWall,
        {
          id: prayerWall.length + 1,
          request: newPrayer,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewPrayer("");
      notifySubscribers("A new prayer request was added!");
    }
  };

  const handleGalleryUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGalleryUpload([...galleryUpload, ...Array.from(e.target.files)]);
    }
  };

  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim()) {
      setAnnouncements([
        ...announcements,
        { id: announcements.length + 1, message: newAnnouncement },
      ]);
      setNewAnnouncement("");
    }
  };

  const handleSubscribe = () => {
    if (
      userEmail &&
      /\S+@\S+\.\S+/.test(userEmail) &&
      !subscribedEmails.includes(userEmail)
    ) {
      setSubscribedEmails([...subscribedEmails, userEmail]);
      setShowNotification(
        "Subscribed! You will be notified of new activities."
      );
      setTimeout(() => setShowNotification(""), 2500);
    }
  };

  function notifySubscribers(message: string) {
    if (subscribedEmails.length > 0) {
      setShowNotification(
        `Notification sent to: ${subscribedEmails.join(", ")} - ${message}`
      );
      setTimeout(() => setShowNotification(""), 3500);
    }
  }

  const canAddAnnouncement = permittedAnnouncementEmails.includes(userEmail);

  const openPreview = (src: string) => {
    setPreviewImage(src);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16 flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto flex-1 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-400 text-center opacity-0 animate-fade-in-up">
          Triumphant Family (100 Level)
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
          The Triumphant Family is the foundational forum for 100-level students
          under the Catholic Chaplaincy of FUTMinna. It's a warm and vibrant
          space where students receive spiritual support, mentorship, and
          opportunities to grow in faith and leadership.
        </p>

        <div className="mb-10 flex flex-col items-center opacity-0 animate-fade-in-up animation-delay-400">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="email"
              placeholder="Enter your email to get notified"
              className="bg-gray-800 border border-gray-600 p-2 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button
              className="bg-indigo-600 px-4 py-2 text-sm rounded hover:bg-indigo-700 transition transform hover:scale-105 animate-pulse"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          {showNotification && (
            <div className="text-green-400 mt-2 text-sm animate-fade-in">
              {showNotification}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 opacity-0 animate-fade-in-up animation-delay-600">
          Forum Executives
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {executives.map((exec, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md text-center transform transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg cursor-pointer opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${700 + idx * 100}ms` }}
            >
              <Image
                src={exec.image}
                alt={exec.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-white">{exec.name}</h3>
              <p className="text-indigo-400 text-sm mb-2">{exec.position}</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p className="flex justify-center items-center space-x-2">
                  <FaPhoneAlt className="text-indigo-400" />
                  <span>{exec.phone}</span>
                </p>
                <p className="flex justify-center items-center space-x-2">
                  <FaEnvelope className="text-indigo-400" />
                  <span>{exec.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 opacity-0 animate-fade-in-up animation-delay-900">
          Forum Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {[
            ...galleryImages,
            ...galleryUpload.map((f) => URL.createObjectURL(f)),
          ].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${1000 + index * 100}ms` }}
              onClick={() => openPreview(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-1200">
          <label className="block mb-2 text-sm text-gray-400">Add Photo</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="bg-gray-800 border border-gray-600 rounded p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            onChange={handleGalleryUpload}
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 opacity-0 animate-fade-in-up animation-delay-1400">
          Discussion Board
        </h2>
        <div className="mb-4 space-y-2 opacity-0 animate-fade-in-up animation-delay-1500">
          <input
            type="text"
            placeholder="Discussion Title"
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            value={newDiscussion.title}
            onChange={(e) =>
              setNewDiscussion({ ...newDiscussion, title: e.target.value })
            }
          />
          <textarea
            placeholder="Discussion Content"
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            rows={3}
            value={newDiscussion.content}
            onChange={(e) =>
              setNewDiscussion({ ...newDiscussion, content: e.target.value })
            }
          />
          <button
            className="bg-indigo-600 px-4 py-2 text-sm rounded hover:bg-indigo-700 transition transform hover:scale-105 animate-pulse"
            onClick={handleAddDiscussion}
          >
            Add Discussion
          </button>
        </div>
        <div className="space-y-4 mb-12">
          {discussionPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg p-5 border border-gray-700 shadow transform transition-transform duration-300 hover:scale-[1.02] opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${1600 + post.id * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-indigo-400">
                {post.title}
              </h3>
              <p className="text-gray-300">{post.content}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-indigo-300 mb-2">
                  Comments
                </h4>
                <div className="space-y-2 mb-2">
                  {post.comments.length === 0 && (
                    <div className="text-gray-500 italic text-xs">
                      No comments yet.
                    </div>
                  )}
                  {post.comments.map((comment, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 rounded p-2 text-sm text-gray-200"
                    >
                      {comment}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="flex-1 bg-gray-700 border border-gray-600 p-1 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    value={commentInputs[post.id] || ""}
                    onChange={(e) =>
                      setCommentInputs({
                        ...commentInputs,
                        [post.id]: e.target.value,
                      })
                    }
                  />
                  <button
                    className="bg-indigo-600 px-2 py-1 text-xs rounded hover:bg-indigo-700 transition transform hover:scale-110"
                    onClick={() => handleAddComment(post.id)}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 opacity-0 animate-fade-in-up animation-delay-1800">
          Prayer Wall
        </h2>
        <div className="mb-4 opacity-0 animate-fade-in-up animation-delay-1900">
          <textarea
            placeholder="Share a prayer request..."
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            rows={2}
            value={newPrayer}
            onChange={(e) => setNewPrayer(e.target.value)}
          />
          <button
            className="bg-indigo-600 px-4 py-2 text-sm rounded hover:bg-indigo-700 transition transform hover:scale-105 animate-pulse mt-2"
            onClick={handleAddPrayer}
          >
            Post Prayer
          </button>
        </div>
        <div className="space-y-4 mb-12">
          {prayerWall.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-indigo-300 italic shadow opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${2000 + item.id * 100}ms` }}
            >
              {item.request}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 opacity-0 animate-fade-in-up animation-delay-2200">
          Announcements
        </h2>
        <div className="bg-indigo-900 rounded-xl p-6 border border-indigo-500 shadow-md mb-6 opacity-0 animate-fade-in-up animation-delay-2300">
          {announcements.map((a) => (
            <p key={a.id} className="text-gray-100 mb-2">
              {a.message}
            </p>
          ))}
        </div>
        {canAddAnnouncement && (
          <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-2400">
            <textarea
              placeholder="Add Announcement"
              className="w-full bg-gray-800 border border-gray-600 p-2 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              rows={2}
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
            />
            <button
              className="bg-indigo-600 px-4 py-2 text-sm rounded hover:bg-indigo-700 transition transform hover:scale-105 animate-pulse mt-2"
              onClick={handleAddAnnouncement}
            >
              Post Announcement
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-400 text-sm opacity-0 animate-fade-in-up animation-delay-2600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          <div>
            &copy; {new Date().getFullYear()} Triumphant Family, FUTMinna
            Catholic Chaplaincy. All rights reserved.
          </div>
          <div>
            <a
              href="mailto:chaplaincy@futminna.edu.ng"
              className="text-indigo-400 hover:underline"
            >
              Contact Us
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.futminna.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              FUTMinna Website
            </a>
          </div>
        </div>
      </footer>

      {/* Modal for gallery image preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer animate-fade-in"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition"
              aria-label="Close preview"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      {/* Tailwind animation styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
        .animation-delay-1900 {
          animation-delay: 1.9s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-2200 {
          animation-delay: 2.2s;
        }
        .animation-delay-2300 {
          animation-delay: 2.3s;
        }
        .animation-delay-2400 {
          animation-delay: 2.4s;
        }
        .animation-delay-2600 {
          animation-delay: 2.6s;
        }
      `}</style>
    </div>
  );
};

export default TriumphantFamilyPage;
