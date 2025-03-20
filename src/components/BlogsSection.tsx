import { blogPosts } from "../Constants/constant";

export const BlogsSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold inline-block">
            Blog & <span className="text-blue-400">Articles</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row mb-16 gap-8">
          <div className="md:w-1/2">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Semiconductor chip"
                className="w-full h-64 object-cover object-center"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="mb-2 text-gray-600">Actiontec</div>
            <div className="mb-2 text-gray-600">February 24,2024</div>
            <h2 className="text-2xl font-bold mb-4">
              HA Group, an innovative 4G/5G System on a Chip (SoC) in the
              semiconductor startup.
            </h2>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md">
                See More
              </button>
            </div>
          </div>
        </div>
        <BlogsList />
      </div>
    </>
  );
};

export const BlogsList = () => {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="space-y-6">
      {recentPosts.map((post, index) => (
        <div
          key={post.id}
          className={`grid grid-cols-6 md:grid-cols-12 gap-4 ${
            index !== recentPosts.length - 1 ? "border-b border-gray-200" : ""
          } pb-6`}
        >
          <div className="col-span-6 md:col-span-2">
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-24 object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="col-span-4 md:col-span-3">
            <div className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer">
              {post.title}
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="text-sm text-gray-500">{post.date}</div>
          </div>
          <div className="col-span-6 md:col-span-5">
            <p className="text-sm text-gray-700">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
