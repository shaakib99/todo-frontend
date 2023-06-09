export const metadata = {
  title: "TODO: Registration",
  description: "Register a user in todo application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
}
