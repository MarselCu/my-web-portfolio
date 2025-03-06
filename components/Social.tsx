import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface Social {
  icon: ReactNode;
  path: string;
}

const socials: Social[] = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
];
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
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
