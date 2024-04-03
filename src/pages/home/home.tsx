import Header from "../../components/header/header.tsx";
import Content from "../../components/content/content.tsx";
import styles from "./home.module.css"
import Footer from "../../components/footer/footer.tsx";
import mentor from "../../assets/mentor 2.png"
import Popup from "../../components/popup/popup.tsx";
import {useState} from "react";

const Home = () => {
  const [isVisionPopup, setIsVisionPopup] = useState(false);

  return (
    <div className={styles.home}>
      <Header/>
      <Content setIsVisionPopup={setIsVisionPopup}/>
      <img className={styles.home__mentor} src={mentor} alt="mentor"/>
      <Footer/>
      <Popup isVisionPopup={isVisionPopup} setIsVisionPopup={setIsVisionPopup}/>
    </div>
  );
};

export default Home;