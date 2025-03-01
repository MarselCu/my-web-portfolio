import Link from "next/link";

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
  return (
    <header className="py-4 xl:py-6">
      <div className="flex p-[15px] mx-auto justify-between">
        <section>
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Marchel<span className="text-rich-soft-blue">.</span>
            </h1>
          </Link>
        </section>
        <section className="flex gap-4">
            <nav className="flex gap-4">
                {
                    links.map((link, index) => {
                        return <Link href={link.link} key={index} className="hover:text-rich-soft-blue">{link.name}</Link>
                    })
                }
            </nav>
        </section>
      </div>
    </header>
  );
}
