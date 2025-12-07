import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks/useBlogs";
import BlogDetailHero from "../BlogDetailHero";
import TechInnovationsPage from "../TechInnovations";
import BlogNewsLetter from "../BlogNewsLetter";
import VoiceOfAddis from "../VoiceOfAddis";
import { Skeleton } from "@/components/ui/skeleton";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>(); 

  const { data: blogResponse, isLoading, isError } = useBlog(id);

  if (isLoading) {
    return (
      <div className="w-full max-w-[1512px] mx-auto py-10 px-6">
        <Skeleton className="w-full h-[500px] sm:h-[450px] rounded-2xl" />
        <Skeleton className="h-10 w-1/2 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-10" />
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    );
  }

  if (isError || !blogResponse?.data) {
    return <div className="p-10 text-center text-red-500">Blog Not Found or Error Loading</div>;
  }

  const blog = blogResponse.data;

  return (
    <main>
      <BlogDetailHero /> 
      
      <TechInnovationsPage blog={blog} />
      
      <BlogNewsLetter />
      <VoiceOfAddis title="RelatedBlogs" />
    </main>
  );
};

export default BlogDetail;