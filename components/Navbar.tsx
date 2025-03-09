import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {navigationLinks.map((link, index) => {
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
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
