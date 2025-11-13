"use client";
import blogPosts from "@/constants/BlogPosts";
import Link from "next/link";
import { useState } from "react";

const Posts = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="min-h-screen">
      <button onClick={() => setIsHidden((prev) => !prev)}>
        See all Posts
      </button>
      <Link className="text-red-500 text-2xl" href="/dashboard/users">See all Users</Link>

      {!isHidden &&
        blogPosts.map((post) => (
          <div
            key={post.id}
            className="group relative flex max-w-[700px] max-h-[200px] flex-col gap-2 overflow-hidden rounded-2xl border border-red-500 bg-[#F6F6F6] p-4 shadow text-red-900"
          >
            <h3 className="text-2xl text-[#2B2B2B]">{post.title}</h3>
            <p className=" text-[#666666] line-clamp-3 ">{post.description}</p>
            <p>{post.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Posts;
