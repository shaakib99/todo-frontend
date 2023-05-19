"use client";

import { Navbar } from "./navbar.component";
import { Footer } from "./footer.component";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";

const colors = require("../../utils/colors");

export default function CommonLayout(options: { children: React.ReactNode }) {
  const pathName = usePathname();
  const excludeNavbarFromPath: string[] = [];
  const excludeFooterFromPath: string[] = [];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorSuccess: colors.primary,
          colorWarning: colors.warning,
          colorTextSecondary: colors.secondary,
          colorPrimary: colors.primary,
        },
      }}
    >
      {excludeNavbarFromPath.includes(pathName) === false && <Navbar />}
      <main style={{ minHeight: "80vh" }}>{options.children}</main>
      {excludeFooterFromPath.includes(pathName) === false && <Footer />}
    </ConfigProvider>
  );
}
