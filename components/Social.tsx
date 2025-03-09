import Link from "next/link";
import { socials } from "@/data";

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.url} target="_blank" key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
