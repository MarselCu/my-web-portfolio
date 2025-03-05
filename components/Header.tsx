"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-4 xl:py-8">
      <div className="p-[15px] xl:px-20 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Marchel<span className="text-app-secondary">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
}
