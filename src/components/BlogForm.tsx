import { useState } from "react"
import { useCreateBlog } from "@/hooks/useBlogs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function BlogForm() {
  const mutation = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")

  const submit = () => {
    if (!title || !content) return

    mutation.mutate({
      title,
      description,
      content,
      category: ["TECH"],
      coverImage, 
      date: new Date().toISOString(),
    })

    setTitle("")
    setDescription("")
    setContent("")
    setCoverImage("")
  }

  return (
    <div className="space-y-3 p-4 border rounded-lg">
      <h2 className="font-semibold text-lg">Add New Blog</h2>

      <Input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <Input
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button onClick={submit} className="w-full">
        Add Blog
      </Button>
    </div>
  )
}


