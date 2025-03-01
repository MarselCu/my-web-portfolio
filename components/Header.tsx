"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface Link {
  link: string;
  name: string;
}

const links: Link[] = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/services",
    name: "Services",
  },
  {
    link: "/resume",
    name: "Resume",
  },
  {
    link: "/work",
    name: "Work",
  },
  {
    link: "/contact",
    name: "Contact",
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="py-4 xl:py-8">
      <div className="p-[15px] xl:px-20 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Marchel<span className="text-app-secondary">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8">
          <nav className="flex gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.link}
                  key={index}
                  className={`${
                    pathName === link.link
                      ? "text-app-secondary border-b-2 border-app-secondary"
                      : ""
                  } capitalize font-medium hover:text-app-secondary-hover transition-all duration-300 ease-linear`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Button className="">Hire Me</Button>
        </div>
      </div>
    </header>
  );
}
