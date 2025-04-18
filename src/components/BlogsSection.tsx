import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useBlogStore } from "../store/store";
import { useState } from "react";

export const BlogsSection = () => {
  const blogPosts = useBlogStore((state) => state.blogs);
  const navigate = useNavigate();
  const mainPost = blogPosts[0];

  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-normal inline-block">
              Blog & <span className="text-blue-400 font-semibold">Articles</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row mb-16 gap-8">
            <div className="md:w-1/2">
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={mainPost?.featuredImage}
                  alt={mainPost?.imageAlt}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="mb-2 text-gray-600">{mainPost?.author || "—"}</div>
              <div className="mb-2 text-gray-600">{mainPost?.date}</div>
              <h2 className="text-2xl font-bold mb-4">
                {mainPost?.title}
              </h2>
              <p className="mb-4 text-gray-700">{mainPost?.introduction?.[0]}</p>
              <div>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md"
                  onClick={() => navigate(`/Blog`, { state: { post: mainPost } })}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <BlogsList />
      </div>
    </>
  );
};
export const BlogsList = () => {
  const blogPosts = useBlogStore((state) => state.blogs);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visiblePosts = blogPosts?.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      <Fade triggerOnce direction="up" cascade damping={0.1}>
        {visiblePosts.map((post, index) => (
          <div
            key={post?.id}
            className={`grid grid-cols-6 md:grid-cols-12 gap-4 ${
              index !== visiblePosts.length - 1 ? "border-b border-gray-200" : ""
            } pb-6`}
          >
            <div className="col-span-6 md:col-span-2">
              <img
                loading="lazy"
                src={post?.featuredImage}
                alt={post?.imageAlt}
                className="w-full h-24 object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-4 md:col-span-3">
              <div
                className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => {
                  navigate(`/Blog`, { state: { post } });
                }}
              >
                {post?.title}
              </div>
            </div>
            <div className="col-span-2 md:col-span-2">
              <div className="text-sm text-gray-500">{post?.date}</div>
            </div>
            <div className="col-span-6 md:col-span-5">
              <p className="text-sm text-gray-700">{post?.introduction[0]}</p>
            </div>
          </div>
        ))}
      </Fade>
      {visibleCount < blogPosts.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};