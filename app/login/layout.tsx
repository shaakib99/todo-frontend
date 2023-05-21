export const metadata = {
  title: "TODO: Login",
  description: "TODO Login page",
};

export default function LoginLayout({
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
