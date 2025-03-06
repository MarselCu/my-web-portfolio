"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="pt-2 xl:pt-4">
      <div className="p-[15px] xl:px-20 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Marchel<span className="text-app-secondary">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNavbar/>
        </div>
      </div>
    </header>
  );
}
