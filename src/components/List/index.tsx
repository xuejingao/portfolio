import React from "react";

import styles from "./styles.module.css";

import ListItem from "../ListItem";

import data from "../../constant/data/data.json";

const PROJECT_DATA = data["projects"];
// const ITEMS_PER_ROW = 2;

// const project_data_length: number = PROJECT_DATA.length / ITEMS_PER_ROW;
// const table_rows = [...Array(Math.ceil(project_data_length)).keys()];

// const ICON_SIZE = 20;
// const LINES = 2;

export type ListProps = {
  title?: string;
  dataList?: Array<any>;
  cols?: number;
  lines?: number;
  iconSize?: number;
};

const List: React.FC<ListProps> = ({
  title = "Projects",
  dataList = PROJECT_DATA,
  cols = 1,
  lines = 0,
  iconSize = 20,
}) => {
  const TABLE_ROWS: number = dataList.length / cols;
  const TABLE_ROWS_ARR = [...Array(Math.ceil(TABLE_ROWS)).keys()];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>{title}</div>
        <table>
          <tbody>
            {TABLE_ROWS_ARR.map((_, i) => (
              <tr className={styles.projectRow} key={i.toString()}>
                {dataList
                  .slice(i * cols, i * cols + cols)
                  .map((listItem, j) => {
                    return (
                      <td
                        className={styles.listItem}
                        key={`${i.toString()}${j.toString()}`}
                      >
                        <ListItem
                          {...listItem}
                          iconSize={iconSize}
                          lines={lines}
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

export default List;
