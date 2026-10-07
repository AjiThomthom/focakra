"use client";
import { Divider, Paper } from "@mui/material";
import { Bomb, CctvIcon, LayoutDashboard } from "lucide-react";
import { SiTelegram, SiTensorflow, SiUltralytics } from "react-icons/si";

export function WhatsOnSection() {
  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl md:text-4xl text-black font-semibold my-3 underline">
        What's in CAKRA?
      </h1>
      <p className="text-xl md:text-3xl text-center text-black">
        Everything you need for smart security solutions
      </p>
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 my-8 gap-5">
        {services.map((item, index) => (
          <Paper
            key={index}
            className="w-full md:w-96 h-44 p-4 mx-auto cursor-pointer !transition-shadow hover:!shadow-lg hover:!shadow-orange-300/20"
          >
            <div className="flex  my-2 items-center justify-between">
              <div className="bg-yellow-300 px-2 rounded-md text-orange-400 py-2">
                {item.icon}
              </div>

              <h2 className="font-semibold">{item.title}</h2>
            </div>
            <Divider />
            <p className="my-3">{item.description}</p>
          </Paper>
        ))}
      </div>
      <p className="underline text-gray-500 my-3 text-sm md:text-lg text-center">
        Dan berbagai fitur terintegrasi lain nya
      </p>
    </div>
  );
}

const services = [
  {
    icon: <CctvIcon />,
    title: "Realtime Streaming",
    description: "Memungkinkan kamu untuk melakukan pemantauan secara realtime",
  },
  {
    icon: <SiTensorflow />,
    title: "Fighting Recognition",
    description:
      "Memungkinkan kamera  untuk mengenali objek yang terekam di dalam kamera CCTV",
  },
  {
    icon: <SiTelegram />,
    title: "Telegram Bot Alert",
    description:
      "Memungkinkan sistem mengirimi notifikasi melalui bot telegram",
  },
  {
    icon: <LayoutDashboard />,
    title: "CCTV Management",
    description: "Terintegrasi dengan sistem manajemen kamera",
  },
  {
    icon: <Bomb />,
    title: "Vandalisme Recognition",
    description: "Memungkinkan kamera mengenali aksi vandalisme",
  },
];
