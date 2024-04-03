import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./currency.module.css"
import {CurrencyCode, CurrencyData} from "../../types/currency.ts";

type Props = {
  currency: CurrencyCode;
}


const Currency = ({currency}: Props) => {
  const [rate, setRate] = useState<number | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(r => {
          const data: CurrencyData = r.data;
          const currencyRate = Math.round(data.Valute[currency].Value);
          setRate(currencyRate);
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [currency]);

  return (
    <div className={styles.currency}>
      <h3>{rate}</h3>
      <p>увеличение личной продуктивности</p>
    </div>
  );
};

export default Currency;