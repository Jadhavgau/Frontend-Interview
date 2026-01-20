import { Card } from "@/components/ui/card"

export default function BlogCard({ blog, onClick }: any) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-md transition overflow-hidden"
    >
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-32 w-full object-cover"
        />
      )}

      <div className="p-3">
        <p className="text-xs text-gray-500">
          {blog.category.join(", ")}
        </p>
        <h3 className="font-semibold mt-1">{blog.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {blog.description}
        </p>
      </div>
    </Card>
  )
}




