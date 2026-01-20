// pages/BlogPage.tsx
import { useState } from "react"
import BlogList from "@/components/BlogList"
import BlogDetail from "@/components/BlogDetail"
import BlogForm from "@/components/BlogForm"

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          <BlogForm />
          <BlogList onSelect={setSelectedId} />
        </div>

        <div className="md:col-span-2">
          {selectedId ? (
            <BlogDetail blogId={selectedId} />
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Select a blog to view details
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

