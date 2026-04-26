import "./globals.css";

export const metadata = {
  title: "クロヤナギ医院 | 浜松市三ヶ日町の内科・小児科",
  description: "浜松市三ヶ日町の地域医療を支えるクロヤナギ医院。内科・小児科を中心に、皆様の健康な暮らしをサポートします。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
