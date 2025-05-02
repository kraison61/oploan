"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  heading: string;
  createdAt: Date;
};

const PageBlogAdmin = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("api/blogs");
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) return <p>loading...</p>;

  //Delete
  const handleDelete = async (slug: string) => {
    const confirmDelete = confirm(
      `คุณแน่ใจหรือไม่ว่าต้องการลบบทความ "${slug}"?`
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // ลบออกจาก state ด้วย filter
        setBlogs((prev) => prev.filter((blog) => blog.slug !== slug));
        alert("✅ ลบเรียบร้อยแล้ว");
      } else {
        const err = await res.text();
        alert(`❌ ลบไม่สำเร็จ: ${err}`);
      }
    } catch (error) {
      console.error("❌ Delete error:", error);
      alert("เกิดข้อผิดพลาดในการลบ");
    }
  };

  return (
    <main>
      <div className="w-full pt-24 min-h-screen bg-[#f7f6fb]">
        <div className="flex flex-col h-full ">
          <Table>
            <TableCaption>A list of Content</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead className="text-center">Remark</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-[10px]">Description</TableHead>
                <TableHead className="text-left">H1</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog, index) => (
                <TableRow key={blog.id}>
                  <>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/edit/${blog.slug}`} className="mr-2">
                        <Button
                          size="sm"
                          variant="default"
                          className="mr-2 cursor-pointer"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="mr-2 cursor-pointer"
                        onClick={() => handleDelete(blog.slug)}
                      >
                        Del
                      </Button>
                    </TableCell>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell className="font-medium">
                      {blog.description}
                    </TableCell>
                    <TableCell className="font-medium">
                      {blog.heading}
                    </TableCell>
                  </>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default PageBlogAdmin;
