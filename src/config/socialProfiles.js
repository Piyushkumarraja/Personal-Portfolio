// IMPORTs HERE
import { emailId } from "config";
import { GithubIcon, MailIcon, LinkedInIcon, InstagramIcon } from "assets/Images";

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

export const socialProfiles = [
  {
    name: "Github",
    href: `https://github.com/Piyushkumarraja`,
    Icon: GithubIcon,
    newTab: true,
  },
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/piyush-kumar-425bb2167/`,
    Icon: LinkedInIcon,
    newTab: true,
  },
  // {
  //   name: "Instagram",
  //   href: `https://www.instagram.com/paras__fbg`,
  //   Icon: InstagramIcon,
  //   newTab: true,
  // },
  {
    name: "Mail",
    href: `mailto:${emailId}`,
    Icon: MailIcon,
  },
];
