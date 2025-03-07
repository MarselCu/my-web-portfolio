"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

interface Service {
  num: string;
  label: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    num: "01",
    label: "Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.sdasdsadasdasd asdasdasdasdadas asdasdasdasdsa asdasdasdasdas asdasdasdasdasd sadasdasdasdas asdasdasdasdsa asdasdasdas",
    href: "",
  },
  {
    num: "02",
    label: "Backend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
  {
    num: "03",
    label: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
  {
    num: "04",
    label: "Mobile Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center py-10 xl:py-0">
      <div className="p-6 xl:px-18 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 group h-full">
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-bold text-outline text-transparent group-hover:text-outline transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-app-secondary-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-app-primary text-2xl" />
                </Link>
              </div>
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-app-secondary-hover transition-all duration-500">
                {service.label}
              </h2>
              <p className="text-white/60 text-base flex-grow ">
                {service.description}
              </p>
              <div className="border-b border-white/10 w-full mt-auto"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
