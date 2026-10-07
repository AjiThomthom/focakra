"use client";
import { useTokenJWT } from "@/context/user.context";
import { Button } from "@mui/material";
import { BabyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function TopBarNav() {
  return (
    <div className="top-0 fixed flex justify-between items-center  h-14 z-55 bg-white w-full shadow-xl px-1 py-5">
      <div
        className="px-4 flex gap-x-2 items-center"
        onClick={() => (window.location.href = "/")}
      >
        <Image src={"/CAKRA.png"} alt="cakra.png" width={40} height={40} />
      </div>
    </div>
  );
}
