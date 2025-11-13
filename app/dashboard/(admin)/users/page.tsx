import blogPosts from "@/constants/BlogPosts";
import Link from "next/link";

const Users = () => {
  return (
    <div className="min-h-screen">
      <Link className="text-red-500 text-2xl" href="/dashboard/posts">
        Go to Posts
      </Link>
      {blogPosts.map((post) => (
        <h1> {post.author}</h1>
      ))}
    </div>
  );
};

export default Users;
