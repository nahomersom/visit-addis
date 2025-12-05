import React from 'react';


interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  postedTime: string;
  isBreaking?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Breaking: Major Earthquake Strikes City",
    description: "Residents are advised to stay indoors as emergency services respond to the situation.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1695914233513-6f9ca230abdb?q=80&w=1170&auto=format&fit=crop",
    postedTime: "Posted 1 Hour Ago",
    isBreaking: true,
  },
  {
    id: 2,
    title: "Tech Innovations to Watch in 2024",
    description: "Explore the most exciting technological advancements expected to shape the future.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1682124445940-1c248d19ad0b?q=80&w=1170&auto=format&fit=crop",
    postedTime: "Posted 30 Minutes Ago",
  },
  {
    id: 3,
    title: "Eco-Friendly Travel Guide",
    description: "Discover sustainable ways to explore the world without leaving a heavy footprint.",
    imageUrl: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?q=80&w=1228&auto=format&fit=crop",
    postedTime: "Posted 45 Minutes Ago",
  },
];

const RelatedBlogs: React.FC = () => {
  return (
    <div className="
      w-full max-w-[1512px] mx-auto flex flex-col bg-white
      py-10 gap-6
      px-6 md:px-12 xl:px-[120px]
    ">

      {/* Heading */}
      <div className="w-full flex justify-start">
        <h2 className="text-2xl md:text-3xl font-bold text-[#10383A] leading-tight">
          Related Blogs
        </h2>
      </div>

      {/* Grid Container */}
      <div className="
        w-full grid 
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
        gap-6
      ">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="
              flex flex-col 
              w-full h-[360px] 
              p-4 gap-4 
              rounded-3xl 
              relative overflow-hidden
            "
            style={{ backgroundColor: '#7F92760F' }}
          >

            {/* Image Section */}
            <div className="w-full h-[180px] shrink-0 overflow-hidden rounded-2xl">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 justify-between min-h-0">
              
              {/* Text Group */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#10383A] leading-tight truncate">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="flex items-center justify-between mt-auto">
                <button className="
                  bg-white text-[#10383A] 
                  px-5 py-2 rounded-full 
                  text-sm font-bold 
                  shadow-sm hover:shadow-md transition-shadow 
                  whitespace-nowrap
                ">
                  Read More
                </button>
                <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                  {post.postedTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;