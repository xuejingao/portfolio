import React from "react";
import { useHistory } from "react-router-dom";

import PROFILE_IMG from "../../constant/images/xg_logo.jpeg";
// import Contact from "../Contact";

import styles from "./styles.module.css";

export type NavBarProps = {
  landing?: boolean;
  about?: boolean;
  projects?: boolean;
  blog?: boolean;
};

const NavigationBar: React.FC<NavBarProps> = ({
  landing = true,
  about = true,
  projects = true,
  blog = true,
}) => {
  const history = useHistory();

  // const [showModal, setShowModal] = useState(false);

  const landingButton = () => {
    if (landing) {
      history.push("/");
    }
  };
  const aboutMeButton = () => {
    if (about) {
      history.push("/about");
    }
  };
  const projectButton = () => {
    if (projects) {
      history.push("/projects");
    }
  };
  const blogButton = () => {
    if (blog) {
      history.push("/blog");
    }
  };

  // const displayContact = () => {
  //   setShowModal(true);
  // };

  // const hideContact = () => {
  //   setShowModal(false);
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img
          className={styles.profile_img}
          src={PROFILE_IMG}
          alt="Xuejin Gao's Logo"
          onClick={landingButton}
        />

        <ul className={styles.list}>
          <li className={styles.listItem} onClick={aboutMeButton}>
            About Me
          </li>
          <li className={styles.listItem} onClick={projectButton}>
            Projects
          </li>
          <li className={styles.listItem} onClick={blogButton}>
            Blog
          </li>
          <li className={styles.listItem} onClick={landingButton}>
            Contact
          </li>
        </ul>
      </div>
      {/* <Contact show={showModal} closeFunction={hideContact} /> */}
    </nav>
  );
};

export default NavigationBar;
