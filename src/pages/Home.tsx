import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="space-y-4">
          <Button onClick={() => navigate("/create")} className="w-full">
            Create Blog
          </Button>

          <BlogList onSelect={setSelectedId} />
        </div>

        {/* Blog Details */}
        <div className="md:col-span-2">
          {selectedId !== null ? (
            <BlogDetails blogId={selectedId} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a blog to view details
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
