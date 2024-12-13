import { Clock7, Repeat, Download, Server, Shield, Cloud } from "lucide-react";

const featuresData = [
  {
    id: 1,
    title: "Unlimited Downloads",
    description: "Nikmati unduhan tanpa batasan kuota atau waktu.",
    icon: Repeat,
    colorIcon: "text-green-400",
  },
  {
    id: 2,
    title: "24/7 Access",
    description: "Akses file kapan saja, 24 jam sehari, 7 hari seminggu.",
    icon: Clock7,
    colorIcon: "text-blue-400",
  },
  {
    id: 3,
    title: "All File Types",
    description: "Berbagai jenis file untuk memenuhi kebutuhan Anda.",
    icon: Download,
    colorIcon: "text-red-400",
  },
  {
    id: 4,
    title: "Fast Speed",
    description: "Unduh file dengan kecepatan tinggi tanpa gangguan.",
    icon: Server,
    colorIcon: "text-yellow-400",
  },
  {
    id: 5,
    title: "Secure Downloads",
    description: "Keamanan file terjamin dengan proteksi tingkat tinggi.",
    icon: Shield,
    colorIcon: "text-purple-400",
  },
  {
    id: 6,
    title: "Cloud Storage",
    description: "Simpan dan akses file Anda dengan mudah melalui cloud.",
    icon: Cloud,
    colorIcon: "text-teal-400",
  },
];
export default featuresData;
