import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getAchievements() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

async function page() {
  const achievements = await getAchievements();

  return (
    <div className="atelier-wrap py-24 sm:py-28">
      <p className="section-kicker mb-4">
        <span className="font-display text-lg tracking-normal">Archive</span>
        <span className="h-px w-8 bg-[#c9a962]/50" />
        <span>Writing</span>
      </p>
      <h1 className="font-display text-5xl text-[#f3eee4] sm:text-6xl">All notes</h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((blog, i) =>
          blog?.cover_image ? <BlogCard blog={blog} key={i} /> : null
        )}
      </div>
    </div>
  );
}

export default page;
