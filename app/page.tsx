import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stat from "@/components/Stat";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="p-[15px] xl:px-20 mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
              Hello I&apos;m <br />
              <span className="text-app-secondary">Marchel</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              lure ipsun lure ipsum lure ipsum dono ipsum lore lore ipsum
              programming technology ans science trading and investing
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex item-center gap-2"
              >
                <span>My Resume</span>
                <DownloadIcon className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-app-secondary rounded-full flex justify-center items-center text-app-secondary text-base hover:text-app-primary hover:bg-app-secondary-hover hover:tansition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stat/>
    </section>
  );
}
