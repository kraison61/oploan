"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "@/constant/Constant";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

type Blog = {
  id: string;
  slug: string;
  title: string;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const navOpenClass = showNav ? "translate-x-0" : "-translate-x-full";
  const mainLinks = navLinks.slice(0, -1);
  const dropdownLabel = navLinks[navLinks.length - 1]?.label ?? "More";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("❌ Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Overlay */}
      <div
        className={`fixed ${navOpenClass} inset-0 transform transition-all duration-300 z-50 bg-black/70 h-screen w-full`}
      >
        {/* Side Panel */}
        <div
          className={`fixed ${navOpenClass} flex flex-col justify-center h-full transition-all duration-500 w-[80%] sm:w-[60%] bg-indigo-900 text-white space-y-6 p-6 z-[1200]`}
        >
          {/* Main Links */}
          {mainLinks.map((link) => (
            <Link href={link.url} key={link.id} onClick={closeNav}>
              <p className="text-[20px] border-b border-white pb-1 sm:text-[24px]">
                {link.label}
              </p>
            </Link>
          ))}

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              className="text-[20px] border-b border-white pb-1 sm:text-[24px]"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {dropdownLabel}
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-64 max-h-64 overflow-y-auto bg-white text-black rounded shadow z-50">
                {loading ? (
                  <li className="px-4 py-2 text-gray-500">กำลังโหลด...</li>
                ) : blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <li key={blog.id}>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="block px-4 py-2 hover:bg-blue-100 truncate"
                        onClick={() => {
                          setDropdownOpen(false);
                          closeNav();
                        }}
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">ไม่มีบทความ</li>
                )}
              </ul>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={closeNav}
            aria-label="ปิดเมนู"
            className="absolute top-4 right-4"
          >
            <CgClose className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
