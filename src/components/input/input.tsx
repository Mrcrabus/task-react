import {FieldValues} from 'react-hook-form';
import styles from "./input.module.css"

const Input: React.FC<FieldValues> = ({ name,register, required }) => {
  return (
    <>
      <input className={styles.input} required={required} {...register(name)} id={name} placeholder={name} />
    </>
  );
};

export default Input;