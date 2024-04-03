import styles from "./widget.module.css"


type Props = {
  children?: React.ReactNode;
}

const Widget = ({children}: Props) => {
  return (
    <div className={styles.widget}>
      {children}
    </div>
  );
};

export default Widget;