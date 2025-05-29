import type { ReactNode } from "react";
import Footer from "@/components/AnthemFooter";

export default function AnthemLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans flex flex-col items-center justify-between">
      {children}
    </div>
  );
}
