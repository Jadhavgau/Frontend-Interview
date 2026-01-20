import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getBlogs, getBlogById, createBlog, deleteBlog } from "@/api/blogs"

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

export const useBlog = (id: number) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  })

export const useCreateBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}

export const useDeleteBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}

