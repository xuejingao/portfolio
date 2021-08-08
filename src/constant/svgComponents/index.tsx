import {
  SiTypescript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { TiMail } from "react-icons/ti";
import { ReactElement } from "react";

type STACK_OPTIONS = {
  [key: string]: ReactElement;
};

export const TECH_STACK: STACK_OPTIONS = {
  typescript: <SiTypescript />,
  react: <SiReact />,
  css: <SiCss3 />,
  html: <SiHtml5 />,
  mysql: <SiMysql />,
};

export const CONTACT_STACK: STACK_OPTIONS = {
  linkedin: <SiLinkedin />,
  mail: <TiMail />,
  github: <SiGithub />,
};
