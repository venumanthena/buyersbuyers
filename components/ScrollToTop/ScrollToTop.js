import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import s from "../ScrollToTop/ScrollToTop.module.scss";


const ScrollToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  })
  
  return (
    <span style={{display: visible ? 'flex' : 'none'}} className={s.scrollBtn} onClick={scrollTop}>
    <FontAwesomeIcon icon={faArrowUp} />
    </span>
    
  );
}
  
export default ScrollToTop;