import { Button } from "@/components/ui/button"
import { useBlog, useDeleteBlog } from "@/hooks/useBlogs"

export default function BlogDetail({ blogId }: { blogId: number }) {
  const { data, isLoading } = useBlog(blogId)
  const deleteMutation = useDeleteBlog()

  if (isLoading) return <p>Loading...</p>
  if (!data) return null

  return (
    <div className="space-y-4">
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-56 object-cover rounded-lg"
        />
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{data.title}</h2>

        <Button
          variant="destructive"
          onClick={() => deleteMutation.mutate(data.id)}
        >
          Delete
        </Button>
      </div>

      <p className="text-gray-600">{data.content}</p>
    </div>
  )
}




