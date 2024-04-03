import React, {useEffect, useState} from "react";
import styles from "./button.module.css"
import classNames from "classnames";
import {ButtonVariant} from "../../types/buttonVariant.ts";

type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  shortText?: string
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  variant?: ButtonVariant;
}

const Button: React.FC<Props> = ({children, onClick, type = "button", disabled, shortText = children, variant = "primary"}) => {
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <div onClick={onClick} className={classNames(`${styles.largeButton}`, styles[variant])}>

      <button
        type={type}
        className={styles[variant]}
        disabled={disabled}
      >
        {width < 678 ? shortText : children}
      </button>


      <div className={classNames(`${styles.button__rightside}`, styles[variant])}>
        <svg fill={variant === "primary" ? "#000000" : "#FFF"} height="20px" width="20px" version="1.1" id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 362.667 362.667">
          <g>
            <g>
              <path d="M352,0c-5.867,0-10.667,4.8-10.667,10.667v315.627L18.24,3.093C13.973-0.96,7.253-0.853,3.2,3.307
            c-3.947,4.16-3.947,10.667,0,14.827l323.093,323.2H10.667C4.8,341.333,0,346.133,0,352c0,5.867,4.8,10.667,10.667,10.667H352
            c5.867,0,10.667-4.8,10.667-10.667V10.667C362.667,4.8,357.867,0,352,0z"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Button;