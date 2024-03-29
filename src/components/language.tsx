import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Language() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <div className="flex items-center gap-[4px] bg-[#f0f2f5] p-[4px] rounded-[100px]">
      <Link
        href={"/"}
        className={
          currentPath === "/en"
            ? "p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
            : "bg-white p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
        }
        onClick={() => {
          // Use router.push() to navigate to the new route
          router.push("/en");

          // Use router.reload() to reload the page after a short delay (adjust as needed)
          setTimeout(() => {
            router.reload();
          }, 500); // 500 milliseconds delay, adjust as needed
        }}
      >
        <img className="w-[16px]" src="/denmark.png"></img>
        <p className="text-[13px]">DK</p>
      </Link>
      <Link
        href={"/en"}
        className={
          currentPath === "/en"
            ? "bg-white p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
            : " p-[6px] flex items-center gap-[6px] rounded-[70px] cursor-pointer"
        }
        onClick={() => {
          // Use router.push() to navigate to the new route
          router.push("/en");

          // Use router.reload() to reload the page after a short delay (adjust as needed)
          setTimeout(() => {
            router.reload();
          }, 500); // 500 milliseconds delay, adjust as needed
        }}
      >
        <img className="w-[16px]" src="/united-kingdom.png"></img>
        <p className="text-[13px]">EN</p>
      </Link>
    </div>
  );
}
