import Widget from "../widget/widget.tsx";
import styles from "./footer.module.css"
import DateSum from "../dateSum/dateSum.tsx";
import Currency from "../currency/currency.tsx";
import {CurrencyCode} from "../../types/currency.ts";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Widget><DateSum/></Widget>
      <Widget><Currency currency={CurrencyCode.GBP}/></Widget>
    </div>
  );
};

export default Footer;