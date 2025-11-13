import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#FFEBEE]  min-w-full z-10">
      <div className="flex justify-between max-w-[1440px] mx-auto px-12 py-6">
        <Link href="/">
          <img className="w-30 " src="/next.svg" alt="logo" />
        </Link>

        <ul className="flex gap-4 items-center text-[#E63946]">
          <li className="hover:text-[#F8BBD0] transition-colors">
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li className="hover:text-[#F8BBD0] transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#F8BBD0] transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">
              <img className="w-6 h-6" src="/vercel.svg" alt="vercel" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
