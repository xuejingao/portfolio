import React, { MouseEventHandler } from "react";
import { VscChromeClose } from "react-icons/vsc";

import Modal from "../Modal";

import styles from "./style.module.css";

export type ContactProps = {
  show: boolean;
  closeFunction?: MouseEventHandler;
};

const Contact: React.FC<ContactProps> = ({ show, closeFunction }) => {
  return (
    <div className={styles.container}>
      <Modal show={show}>
        <div>
          <div className={styles.iconContainer}>
            <VscChromeClose
              onClick={closeFunction}
              className={styles.closeIcon}
            />
          </div>
          <div className={styles.contact}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, reiciendis, ipsam corporis nostrum blanditiis, nesciunt
            cum iure amet tempora aliquid eum officia consectetur quod sit eaque
            architecto mollitia tenetur ut! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis dignissimos error quaerat
            vel ipsa ducimus repellat, sequi modi ut ullam deserunt voluptatibus
            ipsam sint beatae, aperiam ab suscipit architecto aspernatur! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
            debitis. Asperiores a officia iusto inventore impedit ratione dolore
            voluptas veritatis corporis velit quos, suscipit ullam aperiam eum
            quia sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos mollitia qui asperiores, eos alias earum quibusdam
            eligendi placeat officia ab? Odit quaerat labore adipisci, iste
            dolore expedita. A, similique ipsum!
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
