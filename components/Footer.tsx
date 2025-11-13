import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#B71C1C]  w-full">
      <footer className="px-12 py-12 flex justify-between max-w-[1440px] mx-auto">
        <div className="max-w-[280px]">
          <img className="w-20 h-10" src="/next.svg" alt="logo" />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            deserunt ipsam necessitatibus.
          </p>
        </div>
        <div className="flex pr-20 gap-20">
          <div className="flex flex-col">
            <span className="mb-2 text-white">
              <Link href="/contact">Contact</Link>
            </span>
            <ul className="text-gray-300">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Github</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-white">
              <Link href="/about">About</Link>
            </span>
            <ul className="text-gray-300">
              <li>FAQ</li>
              <li>Our Value</li>
              <li>Pricing</li>
              <li>Locations</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
