import {
  SiTypescript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiLinkedin,
  SiGithub,
  SiRedux,
  SiJavascript,
  SiCplusplus,
  SiJava,
  SiPython,
  SiNodeDotJs,
  SiTensorflow,
  SiFlask,
} from "react-icons/si";
import { TiMail } from "react-icons/ti";
import { ImArrowUp } from "react-icons/im";
import { VscChromeClose } from "react-icons/vsc";
import { ReactElement } from "react";
import { FaCcAmex } from "react-icons/fa";

type STACK_OPTIONS = {
  [key: string]: ReactElement;
};

export const DESIGN_STACK: STACK_OPTIONS = {
  arrowUp: <ImArrowUp />,
  close: <VscChromeClose />,
};

export const TECH_STACK: STACK_OPTIONS = {
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  cpp: <SiCplusplus />,
  java: <SiJava />,
  python: <SiPython />,
  tensorflow: <SiTensorflow />,
  flask: <SiFlask />,
  react: <SiReact />,
  redux: <SiRedux />,
  nodejs: <SiNodeDotJs />,
  css: <SiCss3 />,
  html: <SiHtml5 />,
  mysql: <SiMysql />,
};

export const CONTACT_STACK: STACK_OPTIONS = {
  linkedin: <SiLinkedin />,
  mail: <TiMail />,
  github: <SiGithub />,
};

export const EXTRA_STACK: STACK_OPTIONS = {
  amex: <FaCcAmex />,
};
