import { useParams } from "react-router-dom";
import BlogDetailHero from "../BlogDetailHero";
import TechInnovationsPage from "../TechInnovations";
import { featuredStory, sideStories } from "@/constant";
import BlogNewsLetter from "../BlogNewsLetter";
import VoiceOfAddis from "../VoiceOfAddis";

const BlogDetail = () => {

  const { id } = useParams();

  const allBlogs = [featuredStory, ...sideStories];

  const blog = allBlogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="p-10 text-center">Blog Not Found</div>;
  }

  return (
    <main>
        {/* blog={blog} props */}
      <BlogDetailHero  /> 
      <TechInnovationsPage blog={blog}  />
      <BlogNewsLetter />
      <VoiceOfAddis title="RelatedBlogs" />
    </main>
  );
};

export default BlogDetail;
