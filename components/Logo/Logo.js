import s from "./Logo.module.scss";

function Logo(props) {

  return (
    <div className={s.wrapper}>
        <a href="https://buyersbuyers.com.au/">
            <img src="https://s3.ap-southeast-2.amazonaws.com/media.buyersbuyers.com.au/wp-content/uploads/20210819070255/BB__BuyersBuyers_Logo_Horizontal__Orange_White_Tagline.svg"/>
        </a>
    </div>
  );
}

export default Logo;
