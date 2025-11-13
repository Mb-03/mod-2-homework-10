import blogPosts from "@/constants/BlogPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogIdProps = {
  params: Promise<{
    blogId: string;
  }>;
};

const BlogId = async ({ params }: BlogIdProps) => {
  const { blogId } = await params;

  if (!blogId) return notFound();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      {blogPosts.map((post) => (
        <div key={post.id}>
          {post.id === Number(blogId) && (
            <div className="group relative flex max-w-[700px] flex-col gap-2 overflow-hidden rounded-2xl border border-red-500 bg-[#F6F6F6] p-10 shadow text-red-900">
              <h3 className="text-2xl text-[#2B2B2B]">{post.title}</h3>
              <p className="text-[#666666]">{post.description}</p>

              <span className="absolute top-[90%] right-5 text-[#E63946] cursor-pointer hover:text-[#F8BBD0] transition-colors">
                <Link href="/">Go Back</Link>
              </span>

              <p>{post.author}</p>
            </div>
          )}
        </div>
      ))}
      <button className="mt-10 text-[#2B2B2B] text-2xl">Comments</button>
      <div>
        {blogPosts.map((post) => (
          <div key={post.id} className="mt-20">
            {post.id === Number(blogId) && (
              <div className=" flex flex-col gap-20">
                {post.comments.map((comment, indx) => (
                  <div
                    className="flex flex-col bg-[#F6F6F6] rounded-2xl gap-2 p-10 "
                    key={indx}
                  >
                    <h2 className="text-2xl text-red-900">{comment.author}</h2>
                    <p className="text-[#666666]">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogId;
