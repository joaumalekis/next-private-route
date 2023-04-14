"use client";

import PrivateRoute from "@/ components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/checkIsPublicRoute";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const isPublicPage = checkIsPublicRoute(pathName!);

  return (
    <html lang="en">
      <body>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
