"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
};

export default NotFound;
