import {useMemo, useState} from "react";
import styles from "./dateSum.module.css"

const DateSum = () => {
  const [date] = useState(new Date());

  const sumDate = useMemo(() => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateString = day.toString() + month.toString() + year.toString();
    const digits = dateString.split('');

    return digits.reduce((a, b) => a + parseInt(b), 0);
  }, [date.getDate()]);

  return (
    <div className={styles.dateSum}>
      <h3>{sumDate}</h3>
      <p>техник для достижения целей</p>

    </div>
  );
};

export default DateSum;