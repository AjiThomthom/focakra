import { Divider } from "@mui/material";
import {
  Compass,
  Folder,
  Key,
  Mail,
  MapPin,
  Phone,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="mt-2 bg-gradient-to-br from-[#1E4D05] via-[#286606] to-[#143203] text-white rounded-t-2xl pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide text-[#9FE47A]">
              CAKRA
            </h2>
            <p className="text-xs font-medium text-emerald-200 mt-1">
              Cepat, Akurat, Koordinasi Respon Aman
            </p>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
            Platform pemantauan berbasis AI yang mengintegrasikan kamera CCTV
            untuk keamanan ruang publik secara real-time dan presisi.
          </p>
          <div className="pt-2 text-xs text-emerald-200 space-y-1">
            <p>Developed by:</p>
            <p className="font-semibold text-white">
              Informatics Students of Pelita Bangsa
            </p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h3 className="text-base font-semibold text-[#9FE47A]">
            Akses Cepat
          </h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>
              <Link
                href="/login"
                className="hover:text-[#9FE47A] flex items-center gap-2 transition-colors"
              >
                <Key className="w-4 h-4" /> Masuk
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="hover:text-[#9FE47A] flex items-center gap-2 transition-colors"
              >
                <UserCircle className="w-4 h-4" /> Pendaftaran
              </Link>
            </li>
            <li>
              <a
                href="/maps"
                className="hover:text-[#9FE47A] flex items-center gap-2 transition-colors"
              >
                <Compass className="w-4 h-4" /> Peta Keamanan
              </a>
            </li>
            <li>
              <Link
                href="/docs"
                className="hover:text-[#9FE47A] flex items-center gap-2 transition-colors"
              >
                <Folder className="w-4 h-4" /> Dokumentasi
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 space-y-3">
          <h3 className="text-base font-semibold text-[#9FE47A]">
            Kontak & Bantuan
          </h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#9FE47A] mt-1 shrink-0" />
              <span>Universitas Pelita Bangsa, Cikarang, Indonesia</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#9FE47A] shrink-0" />
              <span>cakra.support@pelitabangsa.ac.id</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#9FE47A] shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      <Divider className="!border-white/20 !my-6" />

      {/* Baris Hak Cipta */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-200 gap-2">
        <p>
          &copy; {new Date().getFullYear()} CAKRA Platform. All rights reserved.
        </p>
        <p>Built for Smart City & Community Security</p>
      </div>
    </footer>
  );
}
