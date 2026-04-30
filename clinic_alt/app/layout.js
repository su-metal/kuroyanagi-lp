import "./globals.css";

export const metadata = {
  title: "クロヤナギ医院 | 地域に根づいたかかりつけ医",
  description:
    "クロヤナギ医院は、外来診療から健康診断、リハビリ、介護老人保健施設まで、地域の健やかな暮らしを支えます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
