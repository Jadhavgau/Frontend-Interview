import { useBlogs } from "@/hooks/useBlogs"
import BlogCard from "./BlogCard"

export default function BlogList({
  onSelect,
}: {
  onSelect: (id: number) => void
}) {
  const { data, isLoading, error } = useBlogs()

  if (isLoading) return <p>Loading blogs...</p>
  if (error) return <p>Error loading blogs</p>

  return (
    <div className="space-y-3 max-h-[80vh] overflow-y-auto pr-2">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelect(blog.id!)}
        />
      ))}
    </div>
  )
}

