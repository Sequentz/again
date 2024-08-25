"use client";

import Link from "next/link";

export const metadata = {
  title: "Header",
  description: "Header",
  openGraph: {
    title: "Header",
    description: "Header",
  },
};

const Header = () => {
  return (
    <header className="bg-gradient-to-t from-rose-600 to-red-800 text-white py-4 px-6 md:px-10 flex items-center justify-between relative z-50">
      <Link className="flex items-center gap-2" href="/">
        <Logo />
        <span className="text-xl font-medium">ROAR</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="hover:underline font-medium" href="/">
          Home
        </Link>
        <Link className="hover:underline font-medium" href="/shop">
          Shop
        </Link>
        <Link className="hover:underline font-medium" href="/about">
          About
        </Link>
        <Link className="hover:underline font-medium" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};
export default Header;
