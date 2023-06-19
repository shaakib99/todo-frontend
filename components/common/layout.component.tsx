"use client";

import { Navbar } from "./navbar.component";
import { Footer as FooterComponent } from "./footer.component";
import { ConfigProvider, Layout, Space } from "antd";
import { usePathname } from "next/navigation";

const colors = require("../../utils/colors");

export default function CommonLayout(options: { children: React.ReactNode }) {
  const pathName = usePathname();
  const excludeNavbarFromPath: string[] = [];
  const excludeFooterFromPath: string[] = [];
  const { Header, Content, Footer } = Layout;
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
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          {excludeNavbarFromPath.includes(pathName) === false && (
            <Header className="shadow-md text-center mb-3" style={{height: 55, textAlign: 'center', paddingInline: 50,
            lineHeight: "55px"}}>
              <Navbar />
            </Header>
          )}
          <Content style={{ minHeight: "80vh" }}>{options?.children}</Content>
          {excludeFooterFromPath.includes(pathName) === false && (
            <Footer>
              <FooterComponent />{" "}
            </Footer>
          )}
        </Layout>
      </Space>
      {/* {excludeNavbarFromPath.includes(pathName) === false && <Navbar />}
      <main style={{ minHeight: "80vh" }}>{options.children}</main>
      {excludeFooterFromPath.includes(pathName) === false && <Footer />} */}
    </ConfigProvider>
  );
}
