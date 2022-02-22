import s from "./Header.module.scss";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import {useState, useEffect} from 'react';



function Header(props) {
  const [animate, setHeaderAnimation] = useState(false)
  
    
    const toggleHeaderAnimation = () => {

      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100){
        setHeaderAnimation(true)
      } 
      else if (scrolled <= 100){
        setHeaderAnimation(false)
      }
    };
    
  
    useEffect(() => {
      window.addEventListener('scroll', toggleHeaderAnimation);
    })



 
  return (
    <div className={`${s.wrapper} ${animate ? s.showAnim:""}`}>
      <div className={s.subContainer}>

          <Logo/>
          <Menu/>
          <ResponsiveMenu/>
          </div>
     
    </div>
  );
}

export default Header;
