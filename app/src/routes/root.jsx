// import Loanding from "../components/Loanding";
// import MainPage from "../components/MainPage";
import courses from "../data/courses.json";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Triangle } from "react-loader-spinner"
import LogoDevPlay from "../images/DevPlayLogo.svg"
import Login from "../components/Login";

export async function loader({ params }) {
  const selectedCourse = courses.find(
    (course) => course.titleId === parseInt(params.titleId)
  );
  return { selectedCourse };
}

export default function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento por 5 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingAnimation>
          <img src={LogoDevPlay} alt="logo" width= "500px" />
          <Triangle
            height="80"
            width="80"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName="" 
            visible={true}
/>
        </LoadingAnimation>
      ) : (
        <div>
        <Login />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const LoadingAnimation = styled.div`
  position: absolute;
  aling-items: center;
  opacity: 1;
  animation-name: opacityDown;
  animation-delay: 4.5s;
  animation-duration: 1s;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
    align-items: center;

  @keyframes opacityDown{
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      top: 20%;
      left: 50%;
    }
  }
`;