"use client";

import { useTokenJWT } from "@/context/user.context";
import { Divider, Paper } from "@mui/material";
import axios from "axios";
import { Compass } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  const user = useTokenJWT();

  const logOutServices = async () => {
    const res = await axios.delete(`/api`, { withCredentials: true });
    console.log(res);
    if (!res) return null;
    window.location.reload();
  };
  return (
    <Paper className="mt-18">
      <div className="flex flex-col gap-x-5 md:flex-row items-center justify-around px-6">
        <div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold my-2">CAKRA</h1>
            <h2 className="text-xl md:text-2xl my-4">
              Cepat, Akurat, Koordinasi Respon Aman
            </h2>
            <Divider sx={{ borderBottomWidth: 3, borderColor: "slate.300" }} />
            <div className="flex my-3 gap-x-2">
              {user ? (
                <>
                  <button
                    onClick={() => router.back()}
                    className="bg-[#9FE47A] px-2 py-1 md:px-4 md:py-3 shadow-xs rounded-md w text-[#2C7E00] w-32 md:w-42 font-semibold cursor-pointer"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={logOutServices}
                    className="bg-[#9FE47A] px-2 py-1 md:px-4 md:py-3 shadow-xs rounded-md w text-[#2C7E00] w-32 md:w-42 font-semibold cursor-pointer"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/login")}
                    className="bg-[#9FE47A] px-2 py-1 md:px-4 md:py-3 shadow-xs rounded-md w text-[#2C7E00] w-32 md:w-42 font-semibold cursor-pointer"
                  >
                    Masuk
                  </button>
                  <button
                    onClick={() => router.push("/docs")}
                    className="bg-[#9FE47A] px-2 py-1 md:px-4 md:py-3 rounded-md shadow-xs text-[#2C7E00] w-32 md:w-42  font-semibold cursor-pointer"
                  >
                    Dokumentasi
                  </button>
                </>
              )}
            </div>
          </div>
          <p className="font-serif text-96 md:text-xl">
            Platform integrasi kamera CCTV dengan Kecerdasan artificial
            intellegence
          </p>
        </div>
        <div className="bg-[#2A6B08] px-3 py-2 w-full md:w-xl rounded-md my-6">
          <video
            src="/demo.mp4"
            autoPlay
            loop
            muted
            className="pointer-events-none aspect-video w-full h-34 md:h-68 rounded-[12px] object-cover shadow-sm border border-neutral-300"
          ></video>
          <button
            onClick={() => (window.location.href = "/maps")}
            className="mx-auto w-full h-8 md:h-12 text-[#2A6B08] my-2 cursor-pointer gap-x-2 rounded-md shadow-xs flex items-center justify-center bg-[#9FE47A]"
          >
            <Compass className="text[#2A6B08]" />
            Explore
          </button>
        </div>
      </div>
      <div></div>
    </Paper>
  );
}
