import "./globals.css";

export const metadata = {
  title: "クロヤナギ医院",
  description: "地域に寄り添うクロヤナギ医院の公式サイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
