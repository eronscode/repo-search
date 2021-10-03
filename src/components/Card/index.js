import { CardContainer } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  avatar_url: PropTypes.string,
  username: PropTypes.string,
  full_name: PropTypes.string,
  forks: PropTypes.number,
  open_issues: PropTypes.number,
  stars: PropTypes.number,
  toggleContributors: PropTypes.func,
};

const defaultProps = {
  avatar_url: undefined,
  username: undefined,
  full_name: undefined,
  forks: undefined,
  open_issues: undefined,
  stars: undefined,
  toggleContributors: () => null,
};

function Card({
  avatar_url,
  username,
  full_name,
  forks,
  open_issues,
  stars,
  toggleContributors,
}) {
  return (
    <CardContainer>
      <div className='image-container'>
        <img src={avatar_url} alt={username} />
      </div>
      <ul className='info-details'>
        <li>
          <span>username:</span> {username}
        </li>
        <li>
          <span>full name:</span> {full_name}
        </li>
        <li>
          <span>forks:</span> {forks}
        </li>
        <li>
          <span>open issues:</span> {open_issues}
        </li>
        <li>
          <span>stars:</span> {stars}
        </li>
      </ul>
      <div className='footer'>
        <button onClick={toggleContributors}>View Contributors</button>
      </div>
    </CardContainer>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
