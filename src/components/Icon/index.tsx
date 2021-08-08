import React, { ReactElement } from "react";

import styles from "./styles.module.css";

import openInNewTab from "../../constant/helper/openInNewTab";

export interface IconProps {
  size: number;
  link?: string;
  children: ReactElement;
}

const Icon: React.FC<IconProps> = ({
  size,
  link = "https://github.com/xuejingao",
  children,
}) => {
  const styling = {
    fontSize: size,
  };

  const handleClick = () => {
    openInNewTab(link);
  };

  return (
    <div className={styles.icon} style={styling} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Icon;
