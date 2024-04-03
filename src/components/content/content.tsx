import styles from "./content.module.css"
import Button from "../button/button.tsx";
import {ButtonVariant} from "../../types/buttonVariant.ts";

type Props = {
  setIsVisionPopup: (value: boolean) => void;
}

const Content = ({setIsVisionPopup}: Props) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>Создаю условия<br/> для вашего успеха</h1>
      <p className={styles.content__body}>Когда ваше время и энергия лучше сфокусированы, стремление к новым
        возможностям становится реальностью, ваш
        успех зависит от ваших действий</p>
      <div className={styles.content__buttons}>
        <Button onClick={()=>setIsVisionPopup(true)} shortText={"Записаться"} variant={ButtonVariant.Primary}>Записаться на консультацию</Button>
        <Button onClick={()=>setIsVisionPopup(true)} shortText={"Заказать звонок"} variant={ButtonVariant.Secondary}>Бесплатная консультация</Button>
      </div>
    </div>
  );
};

export default Content;