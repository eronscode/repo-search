import { CardContainer } from "./styles";

function Card({
  avatar_url = "",
  username = "",
  full_name = "",
  forks = "",
  open_issues = "",
  stars = "",
  toggleContributors = () => null,
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

export default Card;
