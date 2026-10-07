import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function RegisterSection() {
  const router = useRouter();
  return (
    <div className="bg-yellow-500 px-2 py-4 flex-col md:flex-row flex justify-between rounded-md items-center">
      <div className="text-orange-800">
        <h1 className="font-semibold text-xl">
          Segera Daftarkan Akun mu Sekarang!
        </h1>
        <p className="text-sm">
          Mari amankan ruang publik masyarakat bersama CAKRA
        </p>
      </div>
      <button
        className="flex gap-x-2 bg-orange-500 px-2 py-4 rounded-md"
        onClick={() => router.push("/register")}
      >
        <UserCircle />
        Register Now
      </button>
    </div>
  );
}
