import React from "react";

import styles from "./styles.module.css";

import ProjectItem from "../ProjectItem";

import data from "../../constant/data/data.json";

const PROJECT_DATA = data["projects"];
const project_data_length: number = PROJECT_DATA.length / 2;
const table_rows = [...Array(Math.ceil(project_data_length)).keys()];

const ICON_SIZE = 20;
const LINES = 2;

const ProjectList: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>Projects</div>
        <table>
          <tbody>
            {table_rows.map((_, i) => (
              <tr className={styles.projectRow} key={i.toString()}>
                {PROJECT_DATA.slice(i * 2, i * 2 + 2).map((project, j) => {
                  return (
                    <td
                      className={styles.projectItem}
                      key={`${i.toString()}${j.toString()}`}
                    >
                      <ProjectItem
                        {...project}
                        iconSize={ICON_SIZE}
                        lines={LINES}
                        key={`${i.toString()}${j.toString()}`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
