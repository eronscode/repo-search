import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { color, mixins } from "styles/styleUtils";

export function ErrorUI({ onError = () => null }) {
  return (
    <ErrorContainer>
      <h1>Ooop! Something went wrong</h1>
      <button onClick={onError}>Retry</button>
    </ErrorContainer>
  );
}

export function CardLoader({ length = 3, className = "" }) {
  return Array(length)
    .fill()
    .map((item, index) => (
      <div key={index} className={className}>
        <CardLoaderContainer>
          <div>
            <Skeleton circle={true} height={100} width={100} />
            <div>
              <Skeleton style={{margin: '10px 0'}} count={3} height={20} width={300} />
            </div>
          </div>
        </CardLoaderContainer>
      </div>
    ));
}

const CardLoaderContainer = styled.div`
  width: 100%;

  background-color: ${color.white};
  padding: 20px;
  text-align: center;
`;

const ErrorContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0;
  h1 {
    margin: 0 0 10px 0;
  }
  button {
    border: 2px solid #000;
    padding: 5px 15px;
    ${mixins.clickable}
  }
`;
