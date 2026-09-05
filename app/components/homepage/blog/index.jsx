import Link from "next/link";
import BlogCard from "./blog-card";
import SectionHeading from "../../atelier/section-heading";

function Achievements({ blogs }) {
  return (
    <section id="achievements" className="relative py-12 lg:py-16">
      <div className="atelier-wrap">
        <SectionHeading
          index="07"
          kicker="Writing"
          title="Notes from the work."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 6).map((blog, i) =>
            blog?.cover_image ? <BlogCard blog={blog} key={i} /> : null
          )}
        </div>
        <div className="mt-10 text-center">
          <Link href="/achievements" className="btn-ghost">
            View the archive
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
