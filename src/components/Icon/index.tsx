import React, { ReactElement } from "react";

import styles from "./styles.module.css";

import openInNewTab from "../../constant/helper/openInNewTab";

export interface IconProps {
  size: number;
  link?: string;
  children: ReactElement;
}

const Icon: React.FC<IconProps> = ({ size, link = null, children }) => {
  const styling = {
    fontSize: size,
  };

  const handleClick = () => {
    if (link) {
      openInNewTab(link);
    }
  };

  return (
    <div
      className={`${styles.icon} ${link ? styles.clickable : null} ${
        link ? styles.iconHover : null
      }`}
      style={styling}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Icon;
