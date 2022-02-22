import s from "./ResponsiveMenu.module.scss";
import {useState} from 'react';
import { faBars, faClose, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ResponsiveMenu(props) {

    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);


  const mainListItem = [
    "About us",
    "Our services",
    "Our team",
    "Property news",
    "Property tools",
    "FAQs",
    "Contact",
  ];

  const subMenuList = [
    "We Plan",
    "We Find",
    "We Buy",
    "We Bid",
    "We Loan",
  ];

  return (
      <>
       <div className={s.hamburgerIcon}  onClick={()=> setMenu(!menu)}>
          <FontAwesomeIcon icon={menu?faClose:faBars} />
          </div>
    <div className={`${s.wrapper} ${menu?s.showMenu:""}`}>
            
                    
           


      {mainListItem.map((i, idx) => {
        return (
            <span className={s.listItem} key={'main' + idx}
            onClick={()=> setSubMenu(i=='Our services'?!subMenu:"")}
        
            >
              {i}
                {i=='Our services' && (
                <div className={`${s.subMenu} ${subMenu?s.showSubMenu:""}`} key={'subMain' + idx}>
                  {subMenuList.map((j, index) => {
                    return (
                      <span className={s.subListItem} key={'subListItem' + index}>
                        {j}
                      </span>
                    );
                  })}
                </div>
                )}
              
            </span>
        );
      })}
    </div>
    </>
  );
}

export default ResponsiveMenu;
