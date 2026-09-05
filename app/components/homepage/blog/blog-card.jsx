import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <article className="atelier-card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between text-[0.62rem] uppercase tracking-[0.18em] text-[#c9a962]">
          <p>{timeConverter(blog.published_at)}</p>
          <p>{blog.reading_time_minutes} min</p>
        </div>
        <Link target="_blank" href={blog.url}>
          <h3 className="mt-3 font-display text-2xl leading-snug text-[#f3eee4] hover:text-[#c9a962]">
            {blog.title}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#8d867b]">{blog.description}</p>
      </div>
    </article>
  );
}

export default BlogCard;
