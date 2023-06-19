"use client";

import { Layout } from "antd";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Content } = Layout;
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
