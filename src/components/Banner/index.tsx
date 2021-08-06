import React from "react";

import styles from "./styles.module.css";

import PROFILE_IMAGE from "../../constant/images/xg_logo.jpeg";
import Icon from "../Icon";

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.profile_pic}
          src={PROFILE_IMAGE}
          alt="PROFILE OF XUEJIN GAO"
        />

        {/* TODO:
          Still need to fix the dynamic height allocation for the bio
        */}
        <div className={styles.bioContainer}>
          <div className={styles.bio}>
            <h3 className={styles.name}>Xuejin Gao</h3>
            <p className={styles.description}>
              About me Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci quos quibusdam provident, ea ipsa culpa, eum, itaque
              deleniti cum repellendus architecto ducimus possimus voluptas
              omnis porro nesciunt nostrum ut explicabo?
            </p>

            <div className={styles.linkContainer}>
              <Icon />
              <Icon />
              <Icon />
            </div>

            {/* <ul className={styles.linkContainer}>
              <li className={styles.link}>Icon</li>
              <li className={styles.link}>Icon</li>
              <li className={styles.link}>Icon</li>
              <li className={styles.link}>
                <Icon />
              </li>
              <li>
                <Icon />
              </li>
              <li>
                <Icon />
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      {/* <div>Banner</div> */}
    </div>
  );
};

export default Banner;
