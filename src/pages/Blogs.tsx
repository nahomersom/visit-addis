import BlogHero from "@/components/blog/BlogHero"
import BlogNewsLetter from "@/components/blog/BlogNewsLetter"
import LatestBlogStories from "@/components/blog/LatestBlogStories"
import VoiceOfAddis from "@/components/blog/VoiceOfAddis"


const Blogs = () => {
  return (
    <main>
        <BlogHero />
        <LatestBlogStories />
        <BlogNewsLetter />
        <VoiceOfAddis title="Voice of Addis"/>
    </main>
  )
}

export default Blogs