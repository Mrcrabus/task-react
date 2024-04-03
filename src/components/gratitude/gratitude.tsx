import styles from "./gratitude.module.css"
import {Link} from "react-router-dom";
import logo from "../../assets/logo.svg";


const Gratitude = () => {

  return (
    <div className={styles.gratitude}>
      <h2>
        Спасибо
        за заявку
      </h2>
      <p>
        Я обязательно
        свяжусь с вами
        в ближайшее время.
      </p>
      <Link className={styles.gratitude__logo} to="/"><img src={logo}
                                                           alt="logo"/></Link>
    </div>
  );
};

export default Gratitude;