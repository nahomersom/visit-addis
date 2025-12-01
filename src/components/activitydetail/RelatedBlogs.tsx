import React from 'react';

// --- Types ---
interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  postedTime: string;
  isBreaking?: boolean;
}

// --- Data ---
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Breaking: Major Earthquake Strikes City",
    description: "Residents are advised to stay indoors as emergency services respond to the situation.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1695914233513-6f9ca230abdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postedTime: "Posted 1 Hour Ago",
    isBreaking: true,
  },
  {
    id: 2,
    title: "Tech Innovations to Watch in 2024",
    description: "Explore the most exciting technological advancements expected to shape the future.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1682124445940-1c248d19ad0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postedTime: "Posted 30 Minutes Ago",
  },
  {
    id: 3,
    title: "Tech Innovations to Watch in 2024",
    description: "Explore the most exciting technological advancements expected to shape the future.",
    imageUrl: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postedTime: "Posted 30 Minutes Ago",
  },
];

const RelatedBlogs: React.FC = () => {
  return (
    /* 
      Main Container 
    */
    <div className="w-full h-auto flex flex-col gap-6 py-10 px-6 md:px-[120px] bg-white">

      <div className="w-full flex justify-center md:justify-start">
        <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
          Related Blogs
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-4 p-4 rounded-3xl h-[350px] xl:h-[445px] w-full relative overflow-hidden"
            style={{ backgroundColor: '#7F92760F' }}
          >
            {/* Image Section */}
            <div className="w-full h-40 xl:h-[220px] shrink-0 overflow-hidden rounded-2xl">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              
              {/* Text Group */}
              <div className="flex flex-col gap-2 overflow-hidden">
                <h3 className="text-[16px] xl:text-[18px] font-bold text-[#10383A] leading-snug truncate">
                  {post.title}
                </h3>
                <p className="text-[12px] xl:text-[14px] text-gray-500 leading-relaxed line-clamp-2 xl:line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="flex items-center justify-between mt-auto pt-2 shrink-0">
                <button className="bg-white px-5 py-2 rounded-full text-[12px] xl:text-[14px] font-bold text-[#10383A] shadow-sm hover:shadow-md transition-shadow whitespace-nowrap">
                  Read More
                </button>
                <span className="text-[10px] xl:text-[12px] text-gray-500 font-medium whitespace-nowrap">
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