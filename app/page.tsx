import blogPosts from "@/constants/BlogPosts";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex gap-20 flex-col bg-white items-center pt-25 pb-[250px]">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="group relative flex max-w-[700px] max-h-[200px] flex-col gap-2 overflow-hidden rounded-2xl border border-red-500 bg-[#F6F6F6] p-4 shadow text-red-900"
        >
          <h3 className="text-2xl text-[#2B2B2B]">{post.title}</h3>
          <p className=" text-[#666666] line-clamp-3 ">{post.description}</p>

          <span className="absolute top-[140px] right-[20px] text-[#E63946] cursor-pointer hover:text-[#F8BBD0] transition-colors">
            <Link href={`/blogPosts/${post.id}`}>Read more . . .</Link>
          </span>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
