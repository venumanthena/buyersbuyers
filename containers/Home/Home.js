import s from "./Home.module.scss";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import { faClose, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect} from 'react';


function Home(props) {

  const [visible, setVisible] = useState(false)

  return (
    <div className={s.wrapper}>
      <Header />
      <section className={s.introSection}>
        <div className={s.subContainer}>
          <div className={s.introText}>
            <span className={s.title}>
              Buyers agents working for property buyers... and only buyers
            </span>
            <span className={s.desc}>
              Our national network of buyers agents can help you secure your
              next property for a highly competitive fixed price.
            </span>
            <a href="" className={s.btn}>
              Explore our services
            </a>
          </div>
        </div>
      </section>

      <section className={s.middleSection}>
        <div className={s.subContainer}>
          <div className={s.saveTimeSection}>
            <span className={s.title}>Save time, stress, and money</span>
            <span className={s.desc}>
              BuyersBuyers assists people looking to buy property with some of
              the best buyers agents around Australia. That's why we're 'the
              better way to buy property'.
            </span>
          </div>

          <div className={s.list}>
            <div className={s.item}>
              <span className={s.check}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                </svg>
              </span>

              <span className={s.title}>Working only for buyers</span>
              <span className={s.desc}>
                We help buyers every step of the way in the world of real
                estate. From first and second home to investing. Our market
                insights and intelligence tools will always keep you a step
                ahead.
              </span>
            </div>
            <div className={s.item}>
              <span className={s.check}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                </svg>
              </span>
              <span className={s.title}>Nationwide buying power</span>
              <span className={s.desc}>
                We find the right property for you, be it in your local suburb
                or interstate, anywhere in Australia at a highly competitive
                fixed price, not a percentage of the purchase price, and no
                hidden commissions.
              </span>
            </div>
            <div className={s.item}>
              <span className={s.check}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                </svg>
              </span>
              <span className={s.title}>Best buyers in the business</span>
              <span className={s.desc}>
                We only accept the best, so you can access the best. Our highly
                experienced and reputable buyers agents do all the work from
                planning to finding and buying. So, you can buy with total
                confidence.
              </span>
            </div>
          </div>

          <div className={s.btnSection}>
            <a href="" className={s.btn}>
              Request a call
            </a>
          </div>

          <div className={s.secure}>
            Secure your next property with confidence
          </div>

          <div className={s.video}>
            <iframe
              className="elementor-video"
              frameBorder="0"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/2FOMzcz4RZw?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbuyersbuyers.com.au&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={s.chooseServicesSection}>
        <div className={s.subContainer}>
          <div className={s.services}>
            <span className={s.title}>Choose one of our services</span>
            <span className={s.desc}>
              Whether you’re looking to buy your first home, upgrading to your
              next family home, or searching for an investment property, we help
              you to buy better with tailor-made products designed to suit your
              needs, whether you need a lot of help, or just a little, we've got
              you covered.
            </span>
          </div>

          <div className={s.list}>
            <div className={s.item}>
              <span className={s.icon}>
                <img src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20210821093932/Edit-1.svg" />
              </span>

              <span className={s.title}>WePlan</span>
              <span className={s.desc}>Get a plan and get ahead.</span>
              <a href="" className={s.btn}>
                Find out more
              </a>
            </div>
            <div className={s.item}>
              <span className={s.icon}>
                <img src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20211110061735/Search-1.png" />
              </span>
              <span className={s.title}>WeFind</span>
              <span className={s.desc}>
                Full service end-to-end buying option.
              </span>
              <a href="" className={s.btn}>
                Find out more
              </a>
            </div>
            <div className={s.item}>
              <span className={s.icon}>
                <img src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20210821093932/Bid-1.svg" />
              </span>
              <span className={s.title}>WeBuy</span>
              <span className={s.desc}>
                Fixed price buying package for those who know what they want.
              </span>
              <a href="" className={s.btn}>
                Find out more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.mapExpertSection}>
        <div className={s.subContainer}>
          <div className={s.mapContainer}>
            <img
              className={s.map}
              src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20210806073756/MAPFA.png"
            ></img>
            <span className={s.mapDesc}>
              <span className={s.title}>
                Australia’s first national network of buyers agents
              </span>
              <span className={s.desc}>
                With our national buying power we can get you a highly
                competitive price to save you money on buyers agent service fees
              </span>
              <span className={s.desc2}>
                Plus experience and expert negotiation skills of our buyers
                agents can save you money on the purchase price too.
              </span>

              <a href="" className={s.btn}>
                Learn more
              </a>
            </span>
          </div>
        </div>
      </section>

      {visible && (
      <div className={s.contactBox}>
            <span className={s.heading}>Contact  <span className={s.closeIcon} onClick={()=>setVisible(false)}><FontAwesomeIcon icon={faClose} /></span></span>
            <span className={s.text}><FontAwesomeIcon icon={faPhone} /> <span className={s.title}>1800 975 051</span></span>
            <span className={s.text}><FontAwesomeIcon icon={faEnvelope} /> <span className={s.title}>Mail us</span></span>
      </div>
      )}

      <span className={`${s.contactBtn}`} onClick={()=>setVisible(true)}>
        <FontAwesomeIcon icon={faEnvelope} />
      </span>

      <Footer />
    </div>
  );
}

export default Home;
