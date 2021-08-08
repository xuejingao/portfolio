import React from "react";

import styles from "./styles.module.css";

import Icon from "../Icon";

import { TECH_STACK } from "../../constant/svgComponents";

export type ProjectItemProps = {
  title: string;
  start: string;
  end?: string;
  description: string;
  stack?: string[];
  lines?: number;
  iconSize?: number;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  start,
  end = null,
  description,
  stack = [],
  iconSize = 20,
  lines = null,
}) => {
  const styling = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lines ? lines : 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
  } as React.CSSProperties;

  return (
    <table className={styles.container}>
      <tbody>
        <tr>
          <td className={styles.title}>
            <a href="_blank">{title}</a>
          </td>
        </tr>
        <tr>
          <td className={styles.dates}>{end ? `${start} - ${end}` : start}</td>
        </tr>
        <tr>
          <td className={styles.description} style={styling}>
            {description}
          </td>
        </tr>
        <tr>
          <td className={styles.icons}>
            {stack.map((stackItem) => (
              <Icon size={iconSize}>{TECH_STACK[stackItem]}</Icon>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProjectItem;
