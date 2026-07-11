import { useState } from "react";
import { FileText, ThumbsUp, ThumbsDown } from "lucide-react";
import { BLOG_POSTS } from "../data/portfolioData";

function BlogCard({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  return (
    <div
      className=" border border-slate-800  rounded-xl p-6 bg-slate-900/60 hover:-translate-y-2 hover:border-teal-500
        hover:shadow-0_0_25px_rgba(20,184,166,.35) transition-all duration-500"
    >
      <div className="flex items-start gap-3 mb-4">
        <FileText size={22} className="text-teal-400 mt-1 shrink-0" />

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {post.title}
          </h3>

          <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-slate-500">{post.date}</span>

        <div className="flex gap-3">
          <button
            onClick={() => setLikes(likes + 1)}
            className="flex items-center  gap-2px-3  py-2rounded-lg bg-slate-800
              hover:bg-teal-500 hover:text-black transition-all duration-300"
          >
            <ThumbsUp size={15} />
            {likes}
          </button>


          <button
            onClick={() => setDislikes(dislikes + 1)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800
              hover:bg-red-500 hover:text-white  transition-all    duration-300  "
          >
            <ThumbsDown size={15} />
            {dislikes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section
      id="blog"
      data-aos="fade-right"
      className="max-w-4xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <FileText size={40} className="mx-auto text-teal-400 mb-3" />
        <h1 className="text-4xl font-bold text-center text-white">
          My <span className="text-cyan-400">Blog</span>
        </h1>

        <p className="text-slate-400 mt-3">
          Sharing my learning journey, React development experience and project
          insights.
        </p>
      </div>

      {BLOG_POSTS.length === 0 ? (
        <p className="text-center text-slate-500">No Blog Posts Available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
