import React from "react";

import styles from "./styles.module.css";

import Icon from "../Icon";

import { CONTACT_STACK } from "../../constant/svgComponents";

import PROFILE_IMAGE from "../../constant/images/matteblackkb.jpeg";

const LOGO_SIZE = 30;

export type BannerProps = {
  displayImage?: boolean;
  displayIcons?: boolean;
  title?: string;
  description?: string;
};

const Banner: React.FC<BannerProps> = ({
  displayImage,
  displayIcons,
  title = "",
  description = `About me Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quos quibusdam provident, ea ipsa culpa, eum, itaque deleniti cum repellendus architecto ducimus possimus voluptas omnis porro nesciunt nostrum ut explicabo?`,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {displayImage ? (
          <img
            className={styles.profile_pic}
            src={PROFILE_IMAGE}
            alt="PROFILE OF XUEJIN GAO"
          />
        ) : null}
        <div className={styles.bioContainer}>
          <div className={styles.bio}>
            <h3 className={styles.name}>{title}</h3>
            <p className={styles.description}>{description}</p>

            {displayIcons ? (
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
            ) : null}
          </div>
        </div>
      </div>

      {/* <div>Banner</div> */}
    </div>
  );
};

export default Banner;
