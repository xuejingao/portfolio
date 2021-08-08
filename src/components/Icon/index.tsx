import React, { ReactElement } from "react";

import styles from "./styles.module.css";

const Icon: React.FC<{ size: number; children: ReactElement }> = ({
  size,
  children,
}) => {
  const styling = {
    fontSize: size,
  };

  return (
    <div className={styles.icon} style={styling}>
      {children}
    </div>
  );
};

export default Icon;
