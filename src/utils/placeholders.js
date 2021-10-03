import Button from "components/Button";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { color, mixins } from "styles/styleUtils";

export function ErrorUI({ onError = () => null }) {
  return (
    <ErrorContainer>
      <h1>Ooop! Something went wrong</h1>
      <Button onClick={onError} variant='secondary'>
        Retry
      </Button>
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
              <Skeleton
                style={{ margin: "10px 0" }}
                count={3}
                height={20}
                width={300}
              />
            </div>
          </div>
        </CardLoaderContainer>
      </div>
    ));
}

export function NoData({ text = null, subText = null }) {
  return (
    <NoFilterResultWrapper>
      <div>
        <svg
          viewBox='0 0 512.28 512.28'
          width='512'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <path d='m211.14 165c0-38.249-28.894-69.545-65.938-74.083 20.486 4.206 35.938 22.372 35.938 44.083 0 24.814-20.186 45-45 45s-45-20.186-45-45c0-21.711 15.452-39.877 35.938-44.083-37.044 4.538-65.938 35.834-65.938 74.083 0 41.353 33.647 75 75 75s75-33.647 75-75z' />
            <circle cx='136.14' cy='135' r='15' />
            <circle cx='376.14' cy='135' r='15' />
            <path d='m451.14 165c0-38.249-28.894-69.545-65.938-74.083 20.486 4.206 35.938 22.372 35.938 44.083 0 24.814-20.186 45-45 45s-45-20.186-45-45c0-21.711 15.452-39.877 35.938-44.083-37.044 4.538-65.938 35.834-65.938 74.083 0 41.353 33.647 75 75 75s75-33.647 75-75z' />
            <path d='m301.14 315v15h30v-15c0-41.353-33.647-75-75-75s-75 33.647-75 75v15h30v-15c0-24.814 20.186-45 45-45s45 20.186 45 45z' />
            <path d='m76.14 362c-24.814 0-45 20.186-45 45v60c0 24.814 20.186 45 45 45s45-20.186 45-45v-60c0-24.814-20.186-45-45-45zm15 105c0 8.276-6.724 15-15 15s-15-6.724-15-15v-60c0-8.276 6.724-15 15-15s15 6.724 15 15z' />
            <path d='m196.14 362c-24.814 0-45 20.186-45 45v60c0 24.814 20.186 45 45 45s45-20.186 45-45v-60c0-24.814-20.186-45-45-45zm15 105c0 8.276-6.724 15-15 15s-15-6.724-15-15v-60c0-8.276 6.724-15 15-15s15 6.724 15 15z' />
            <path d='m316.14 362h-45c0 11.515 0 157.508 0 150h30v-60h15c24.814 0 45-20.186 45-45s-20.186-45-45-45zm0 60h-15v-30h15c8.276 0 15 6.724 15 15s-6.724 15-15 15z' />
            <path d='m436.14 422c-8.276 0-15-6.724-15-15 .015-12.261 16.992-19.263 25.591-10.62l10.591 10.62 21.24-21.182-10.591-10.62c-8.481-8.51-19.79-13.198-31.831-13.198-24.814 0-45 20.186-45 45s20.186 45 45 45c8.276 0 15 6.724 15 15 0 12.305-16.948 19.277-25.591 10.62l-10.591-10.62-21.24 21.182 10.591 10.62c8.481 8.511 19.79 13.198 31.831 13.198 24.814 0 45-20.186 45-45s-20.186-45-45-45z' />
            <path d='m211.14 15v-15h-30v15c0 24.814-20.186 45-45 45h-75v30h75c41.352 0 75-33.647 75-75z' />
            <path d='m376.14 90h75v-30h-75c-24.814 0-45-20.186-45-45v-15h-30v15c0 41.353 33.647 75 75 75z' />
          </g>
        </svg>
      </div>
      <div>
        <h4>{text}</h4>
        <p>{subText}</p>
      </div>
    </NoFilterResultWrapper>
  );
}

const NoFilterResultWrapper = styled.div`
  text-align: center;
  width: 100%;
  svg {
    width: 80px;
  }
  h4 {
    margin-top: 40px;
    font-size: 18px;
  }
`;
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
    min-width: 8%;
  }
`;
