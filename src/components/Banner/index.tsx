import React from "react";

import styles from "./styles.module.css";

import Icon from "../Icon";

import { CONTACT_STACK } from "../../constant/svgComponents";

const LOGO_SIZE = 30;

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <img
          className={styles.profile_pic}
          src={PROFILE_IMAGE}
          alt="PROFILE OF XUEJIN GAO"
        /> */}
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
              <Icon size={LOGO_SIZE} link="https://github.com/xuejingao">
                {CONTACT_STACK["github"]}
              </Icon>
              <Icon size={LOGO_SIZE} link="https://linkedin.com/in/xuejingao">
                {CONTACT_STACK["linkedin"]}
              </Icon>
              <Icon size={LOGO_SIZE} link="mailto:gxuejin13@gmail.com">
                {CONTACT_STACK["mail"]}
              </Icon>
            </div>
          </div>
        </div>
      </div>

      {/* <div>Banner</div> */}
    </div>
  );
};

export default Banner;
