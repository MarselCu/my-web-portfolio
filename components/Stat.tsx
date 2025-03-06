"use client";

import CountUp from "react-countup";

interface Stat {
  count: number;
  label: string;
}

const stats: Stat[] = [
  {
    count: 1,
    label: "Year of Experience",
  },
  {
    count: 0,
    label: "Projects Completed",
  },
  {
    count: 0,
    label: "Technologies Mastered",
  },
  {
    count: 0,
    label: "Code Commits",
  },
];
export default function Stat() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="xl:px-20 mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((stat, index) => {
                return (
                    <div key={index}
                    className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp
                        end={stat.count}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-semibold"
                        />
                        <p className={`${stat.label.length > 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.label}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
