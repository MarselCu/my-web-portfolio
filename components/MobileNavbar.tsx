import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet"; // Add SheetTitle
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { navigationLinks } from "@/data";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-app-secondary" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Description</SheetDescription>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Marchel<span className="text-app-secondary">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {navigationLinks.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className={`${
                pathName === link.link
                  ? "text-app-secondary border-b-2 border-app-secondary"
                  : ""
              } text-xl capitalize font-medium hover:text-app-secondary-hover transition-all`}
              onClick={() => setOpen(false)} // Close on click
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
