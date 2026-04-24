import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata = {
  title: "クロヤナギ医院 | 医療法人社団 早友会",
  description:
    "浜松市浜名区三ヶ日町のクロヤナギ医院。内科・消化器科・呼吸器内科・整形外科・リハビリテーション科に対応し、みっかび東介護老人保健施設と連携した地域密着型の医療を提供します。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
