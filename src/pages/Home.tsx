import { useState } from "react";
// import BlogList from "../components/BlogList";
// import BlogDetails from "../components/BlogDetails";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4">
        <Button onClick={() => navigate("/create")} className="w-full">
          Create Blog
        </Button>
        {/* <BlogList onSelect={setSelectedId} /> */}
      </div>

      <div className="md:col-span-2">
        {/* <BlogDetails blogId={selectedId} /> */}
      </div>
    </div>
  );
}
