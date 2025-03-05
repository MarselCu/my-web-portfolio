import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  link: string;
  name: string;
}

export const links: Link[] = [
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

export default function Navbar() {
  const pathName = usePathname();
  return (
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
            } capitalize font-medium hover:text-app-secondary-hover transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
