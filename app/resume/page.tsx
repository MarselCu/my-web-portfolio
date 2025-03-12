"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { aboutMe, educations, experiences, skills } from "@/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="p-[15px] xl:px-16 mx-auto w-full max-w-7xl">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 w-full"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="flex-1 min-h-[70vh] relative">
            <TabsContent
              value="experience"
              className="w-full absolute inset-0 px-6 xl:px-12"
            >
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experiences.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[430px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experiences.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-5 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-app-secondary">
                          {item.duration}
                        </span>
                        <h3 className="text-lg max-w-[320px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-app-secondary"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="skill"
              className="w-full absolute inset-0 px-6 xl:px-12"
            >
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{skills.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[430px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-lg flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-app-secondary-hover transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="w-full absolute inset-0 px-6 xl:px-12"
            >
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{educations.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>
                <ScrollArea className="h-[430px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {educations.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-5 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-app-secondary">
                          {item.duration}
                        </span>
                        <h3 className="text-lg max-w-[320px] min-h-[60px] text-center lg:text-left">
                          {item.program}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-app-secondary"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full absolute inset-0 px-6 xl:px-12"
            >
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-3xl font-bold">{aboutMe.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {aboutMe.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[700px] mx-auto xl:mx-0">
                  {aboutMe.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-3"
                    >
                      <span className="text-white/60">{item.label}</span>
                      <span className="text-lg">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
