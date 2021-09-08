import React, { useState, useEffect } from "react";

// import SCROLL_TOP_IMG from "../../constant/images/toparrow.png";

import { DESIGN_STACK } from "../../constant/svgComponents";

import styles from "./style.module.css";

const ScrollToTop: React.FC = () => {
	const [visiable, setVisibility] = useState(false);

	const handleClick = () => {
		scrollTop();
	};

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className={styles.scrollTop}>
			{visiable && (
				<div className={styles.arrow} onClick={handleClick}>
					{DESIGN_STACK["arrowUp"]}
				</div>
			)}
		</div>
	);
};

export default ScrollToTop;
