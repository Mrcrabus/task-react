import styles from "./popup.module.css"
import Button from "../button/button.tsx";
import {SubmitHandler, useForm} from "react-hook-form"
import Input from "../input/input.tsx";
import {ButtonVariant} from "../../types/buttonVariant.ts";
import {useState} from "react";
import Gratitude from "../gratitude/gratitude.tsx";

interface IFormInput {
  name: string;
  phone: string
}

type Props = {
  isVisionPopup: boolean;
  setIsVisionPopup: (value: boolean) => void;
}

const Popup = ({setIsVisionPopup, isVisionPopup}: Props) => {
  const {register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setSubmitted(true)
    console.log(data);
  };
  const [submitted, setSubmitted] = useState(false)

  const handleClickClose = () => {
    setIsVisionPopup(false);
    setSubmitted(false);
  }


  return (
    <div className={styles.popUp} hidden={!isVisionPopup}>
      <div className={styles.popUp__sidebar}>
        {submitted ?
          <Gratitude/>
          :
          <div className={styles.popUp__tophone}>
            <h2 className={styles.popUp__title}>Закажите <br/> обратный звонок</h2>

            <form className={styles.popUp__form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.popUp__inputs}>
                <Input required={true} name={"имя"} register={register}/>
                <Input required={true} name={"телефон"} register={register}/>
              </div>
              <label htmlFor="consent" className={styles.popUp__confirm}>
                Согласен на сохранение и обработку<br/> персональных данных
                <input className={styles.popUp__checkbox} type="checkbox" id="consent"/>
                <span
                  className={styles.popUp__checkmark}>
              </span>
              </label>

              <Button type="submit" variant={ButtonVariant.Secondary}>Заказать обратный звонок</Button>
            </form>


          </div>}
        <a onClick={handleClickClose} href="#" className={styles.popUp__close}/>


      </div>
    </div>
  );
};

export default Popup;