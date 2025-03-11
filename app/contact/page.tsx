"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="p-4 xl:px-12 mx-auto">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-20">
          <div className="xl:w-[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-lg">
              <h3 className="text-lg text-app-secondary">
                Let&apos;s work together
              </h3>
              <p className="text-white/50 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Firstname"
                  className="text-xs"
                />
                <Input type="text" placeholder="Lastname" className="text-xs" />
                <Input type="email" placeholder="Email" className="text-xs" />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="text-xs"
                />
              </div>
              <Select>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development" className="text-xs">
                    Web Development
                  </SelectItem>
                  <SelectItem value="backend-development" className="text-xs">
                    Backend Development
                  </SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[120px] text-xs"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-32 text-xs">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center order-1 xl:order-none mb-4 xl:mb-0">
            <ul className="w-full max-w-sm space-y-4">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-[#27272c] p-3 rounded-lg"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-app-secondary text-white rounded-md">
                    <div className="text-lg">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/50 text-xs">{item.title}</p>
                    <h3 className="text-sm font-medium text-white">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
