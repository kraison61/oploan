"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/Constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import Logo from "@/components/Logo/Logo";
import LogoMobile from "@/components/Logo/LogoMobile";

type Props = {
  openNav: () => void;
};

type Blog = {
  id: string;
  slug: string;
  title: string;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // ✅ เพิ่ม state ตรงนี้

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint (768px)
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("❌ ดึงข้อมูล blog ไม่สำเร็จ:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const mainLinks = navLinks.slice(0, -1);
  const lastLink = navLinks[navLinks.length - 1];

  return (
    <div
      className={`fixed w-full ${
        navBg ? "bg-white shadow-md z-50" : "fixed"
      } transition-all duration-200 h-[12vh]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* ✅ Logo (เปลี่ยนตามขนาดหน้าจอ) */}
        <Link href="/" className="flex items-center">
          <div className="font-bold text-xl">
            {isMobile ? <LogoMobile /> : <Logo />}
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {mainLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}

          {/* Dropdown for Blogs */}
          <div className="relative group">
            <button
              className="nav__link flex items-center gap-1"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {lastLink.label}
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 max-h-64 overflow-y-auto">
                {loading ? (
                  <p className="px-4 py-2 text-gray-500">กำลังโหลด...</p>
                ) : blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/${blog.slug}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 truncate"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {blog.title}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">ไม่มีบทความ</p>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full z-0">
            <Link href="/application-form">GetStarted</Link>
          </button>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden z-[1100]"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
