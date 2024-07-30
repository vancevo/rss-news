"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: "/news",
      label: "News",
      active: pathname === `/news`,
    },
    {
      href: "/technologies",
      label: "Technologies",
      active: pathname === `/technologies`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm hover:text-black font-medium transition-color",
            `${route.active ? "text-black dark:text-white" : "text-gray-500"}`
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
