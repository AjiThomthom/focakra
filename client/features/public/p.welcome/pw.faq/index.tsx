import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { ChevronDown, HelpCircleIcon } from "lucide-react";

export function FaQSection() {
  return (
    <div className="my-12">
      <span className="text-black gap-x-2 font-semibold items-center flex items-center">
        <HelpCircleIcon />
        <h1 className="text-lg md:text-2xl underline">FaQ</h1>
      </span>
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ChevronDown className="text-green-500" />}
          >
            {item.question}
          </AccordionSummary>
          <Divider />
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const faqData = [
  {
    question: "Apa itu platform CAKRA?",
    answer:
      "CAKRA (Cepat, Akurat, Koordinasi Respon Aman) adalah platform integrasi kamera CCTV berbasis Artificial Intelligence (AI) yang dirancang untuk membantu pemantauan keamanan real-time serta mendeteksi berbagai kejadian berbahaya secara otomatis.",
  },
  {
    question: "Bagaimana cara kerja fitur Fighting & Object Detection?",
    answer:
      "Sistem AI CAKRA menganalisis aliran video CCTV secara langsung menggunakan model Deep Learning untuk mengidentifikasi objek spesifik serta pola gerakan perkelahian/kekerasan secara instan.",
  },
  {
    question: "Apakah notifikasi peringatan dikirim secara otomatis?",
    answer:
      "Ya, ketika AI mendeteksi kejadian mencurigakan atau pelanggaran, sistem akan langsung mengirimkan peringatan (alert) secara otomatis melalui Telegram Bot kepada tim keamanan atau admin terpilih.",
  },
  {
    question: "Apakah CAKRA dapat diintegrasikan dengan jenis CCTV apapun?",
    answer:
      "Selama kamera CCTV mendukung protokol streaming standar seperti RTSP (Real-Time Streaming Protocol) atau IP Camera, kamera tersebut dapat terintegrasi dengan platform CAKRA.",
  },
  {
    question: "Bagaimana cara mendaftarkan lokasi atau CCTV baru?",
    answer:
      "Anda dapat membuat akun terlebih dahulu melalui tombol 'Register Now', lalu masuk ke menu Dashboard untuk mengelola dan menambahkan perangkat CCTV baru ke dalam sistem.",
  },
];
