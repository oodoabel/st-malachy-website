"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface GooglePhoto {
  id: string;
  baseUrl: string;
  filename: string;
  width: number;
  height: number;
}

const GooglePhotosGallery = ({ shareableLink }: { shareableLink: string }) => {
  const [photos, setPhotos] = useState<GooglePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);

        // Extract album ID from the shareable link
        const albumId = extractAlbumId(shareableLink);
        if (!albumId) {
          throw new Error("Invalid Google Photos link");
        }

        // In a real app, you would need a backend endpoint to fetch photos
        // because Google Photos API requires server-side authentication
        const response = await fetch(
          `https://photos.app.goo.gl/6FnkzBWfDM3daJoE9`
        );
        const data = await response.json();

        if (response.ok) {
          setPhotos(data.photos);
        } else {
          throw new Error(data.error || "Failed to fetch photos");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (shareableLink) {
      fetchPhotos();
    }
  }, [shareableLink]);

  const extractAlbumId = (url: string): string | null => {
    // This is a simplified version - actual implementation depends on link format
    const match = url.match(/album\/([^\/]+)/);
    return match ? match[1] : null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <Image
                  src={photo.baseUrl}
                  alt={photo.filename}
                  width={photo.width}
                  height={photo.height}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm truncate">{photo.filename}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GooglePhotosGallery;
