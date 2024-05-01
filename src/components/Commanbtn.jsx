import { Phone } from "./Icons";

const Commanbtn = (props) => {
    return (
      <>
          <div className={`comn-btn d-flex gap-2 ${props.cstm}`}>
            <Phone/>
              <a href="tel:+918222022021"
                className=" text-uppercase  font-jost fw-black fs-md lh-md text-white"              >
                {props.text}
              </a>
          </div>
      </>
    );
  };
  
  export default Commanbtn