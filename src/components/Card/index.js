import { CardContainer } from "./styles";
import testImg from "assets/images/text-img.jpg";

function Card() {
  return (
    <CardContainer>
      <div className='image-container'>
        <img src={testImg} alt='' />
      </div>
      <ul className='info-details'>
        <li>
          <span>username:</span> facebook{" "}
        </li>
        <li>
          <span>username:</span> facebook{" "}
        </li>
        <li>
          <span>username:</span> facebook{" "}
        </li>
        <li>
          <span>username:</span> facebook{" "}
        </li>
      </ul>
      <div className='footer'>
        <p>First x contributors</p>
        <div className='footer-images'>
          <div className='footer-items'>
            <img src={testImg} alt='' />
          </div>
          <div className='footer-items'>
            <img src={testImg} alt='' />
          </div>
          <div className='footer-items'>
            <img src={testImg} alt='' />
          </div>
          <div className='footer-items'>
            <p>+2</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;
