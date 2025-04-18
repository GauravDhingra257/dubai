import {create} from "zustand";

export const useBlogStore = create((set:any) => ({
  blogs: [],
  setBlogs: (blogs:any) => set({ blogs })
}));