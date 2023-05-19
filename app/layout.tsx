import "./globals.css";
import { Poppins } from "next/font/google";
import CommonLayout from "@/components/common/layout.component";

const PoppinsFont = Poppins({ weight: "200", subsets: ["devanagari"] });

export const metadata = {
  title: "Todo: Home",
  description: "Todo Application Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PoppinsFont.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
