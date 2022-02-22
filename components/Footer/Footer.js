import s from "./Footer.module.scss";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


function Footer(props) {
  return (
    <div className={s.wrapper}>
      <div className={s.subContainer}>
        <div className={s.footerOptions}>
          <div className={s.leftSection}>
              <span className={s.logo}>
                <img src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20210806124959/BB__BuyersBuyers_Logo_Shield-269x300.png"></img>
              </span>

              <div className={s.linkItems}>
                <a className={s.item} href="">
                  About us
                </a>
                <a className={s.item} href="">
                  Our services
                </a>
                <a className={s.item} href="">
                  Our team
                </a>
                <a className={s.item} href="">
                  Property news
                </a>
              </div>

              <div className={s.linkItems}>
                <a className={s.item} href="">
                  Property tools
                </a>
                <a className={s.item} href="">
                  Contact
                </a>
                <a className={s.item} href="">
                  FAQS
                </a>
            </div>

           
          </div>
          <div className={s.rightSection}>
              <span className={s.subscribe}>
                Subscribe to the latest market news
              </span>
              <a className={s.btn}>Subscribe</a>
            </div>

            

          




          <ScrollToTop/>
        </div>
        <div className={s.bottomSection}>

          <div className={s.leftLinks}>
              <span className={s.item}>
                © Copyright 2021 BuyersBuyers All rights reserved{" "}
              </span>
              <a className={s.item} href="">
                Terms and conditions
              </a>
              <a className={s.item} href="">
                Privacy
              </a>
            </div>


            <div className={s.rightLinks}>

              <a className={s.shareLinks} href="">
              <FontAwesomeIcon icon={faYoutube} />
              </a>  

              <a className={s.shareLinks} href="">
              <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a className={s.shareLinks} href="">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a className={s.shareLinks} href="">
              <FontAwesomeIcon icon={faTwitter} />
              </a>




            </div>



          </div>
      </div>
    </div>
  );
}

export default Footer;
