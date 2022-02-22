import { faAngleDown, faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import s from "./Menu.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Menu(props) {
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
    <div className={s.wrapper}>
      {mainListItem.map((i, idx) => {
        return (
            <span className={s.listItem} key={'main' + idx}>
              {i}
              {i == "Our services" && (
                <span className={s.icon}>
              <FontAwesomeIcon icon={faAngleDown} />
              </span>
              )}

              {i == "Our services" && (
                

                <div className={s.subMenu} key={'subMain' + idx}>
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
  );
}

export default Menu;
