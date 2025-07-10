"use client";

import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import Image from "next/image";

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

const executives = [
  {
    name: "Rev. Fr. Michael Adebayo",
    position: "Cordinator",
    phone: "+2348012345678",
  },
  {
    name: "Rev. Fr. Michael Adebayo",
    position: "General Secretry",
    phone: "+2348012345678",
  },
  {
    name: "Rev. Fr. Michael Adebayo",
    position: "Public Relations Officer",
    phone: "+2348012345678",
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
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: 1,
      message: "Weekly meeting every Thursday at 4PM in the Chaplaincy Hall.",
    },
  ]);

  const [discussionPosts, setDiscussionPosts] = useState<DiscussionPost[]>([
    {
      id: 1,
      title: "Faith in Campus Life",
      content: "How do you maintain your faith amid academic pressure?",
      comments: [],
      createdAt: new Date().toISOString(),
    },
  ]);

  const [prayerWall, setPrayerWall] = useState<Prayer[]>([
    {
      id: 1,
      request: "Pray for strength during exams.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const [newDiscussion, setNewDiscussion] = useState<{
    title: string;
    content: string;
  }>({ title: "", content: "" });

  const [newPrayer, setNewPrayer] = useState<string>("");
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>(
    {}
  );
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
    const interval = setInterval(cleanupOldItems, 60 * 60 * 1000);
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
    }
  };

  const handleAddComment = (discussionId: number) => {
    const comment = commentInputs[discussionId];
    if (comment?.trim()) {
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
    }
  };

  const openPreview = (src: string) => setPreviewImage(src);
  const closePreview = () => setPreviewImage(null);

  return (
    <div className="min-h-screen mt-10 bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100 animate-fade-in">
            Triumphant Family
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            100 Level Catholic Students Forum, FUTMinna
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Coordinator Contact */}
        <section className="mb-16 bg-gray-800 text-white rounded-xl p-8 shadow-lg animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-gray-100 border-b border-gray-600 pb-2">
            Contact Coordinators
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-gray-400 mb-4">
                <p className="flex  flex-col items-center gap-9 text-gray-300">
                  {executives.map((executive) => (
                    <div>
                      <p className="text-xl font-semibold text-indigo-300">
                        {executive.name}
                      </p>
                      <p>{executive.position}</p>
                      <p className="border-b border-gray-600 pb-3">
                        {executive.phone}
                      </p>
                    </div>
                  ))}
                </p>
              </p>
              <div className="space-y-2"></div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16 animate-fade-in-up animation-delay-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                onClick={() => openPreview(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Announcements */}
        <section className="mb-16 animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Announcements
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-gray-100 last:border-0"
              >
                <p className="text-gray-700">{announcement.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted on {new Date().toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Board */}
        <section className="mb-16 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Discussion Board
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
              <input
                type="text"
                placeholder="Discussion Title"
                className="w-full bg-white border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={newDiscussion.title}
                onChange={(e) =>
                  setNewDiscussion({ ...newDiscussion, title: e.target.value })
                }
              />
              <textarea
                placeholder="Discussion Content"
                className="w-full bg-white border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows={3}
                value={newDiscussion.content}
                onChange={(e) =>
                  setNewDiscussion({
                    ...newDiscussion,
                    content: e.target.value,
                  })
                }
              />
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                onClick={handleAddDiscussion}
              >
                Post Discussion
              </button>
            </div>

            {discussionPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.content}</p>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-600 mb-2">Comments</h4>
                  {post.comments.length === 0 ? (
                    <p className="text-gray-500 text-sm">No comments yet</p>
                  ) : (
                    <div className="space-y-2 mb-4">
                      {post.comments.map((comment, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 p-3 rounded text-sm text-gray-700"
                        >
                          {comment}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 bg-white border border-gray-300 p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                      value={commentInputs[post.id] || ""}
                      onChange={(e) =>
                        setCommentInputs({
                          ...commentInputs,
                          [post.id]: e.target.value,
                        })
                      }
                    />
                    <button
                      className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
                      onClick={() => handleAddComment(post.id)}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prayer Wall */}
        <section className="animate-fade-in-up animation-delay-500">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Prayer Wall
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm mb-6">
            <textarea
              placeholder="Share your prayer request..."
              className="w-full bg-white border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows={3}
              value={newPrayer}
              onChange={(e) => setNewPrayer(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              onClick={handleAddPrayer}
            >
              Submit Prayer
            </button>
          </div>

          <div className="space-y-4">
            {prayerWall.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <p className="text-gray-700 italic">"{prayer.request}"</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(prayer.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Triumphant Family - FUTMinna Catholic
            Chaplaincy
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Events
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={closePreview}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default TriumphantFamilyPage;
