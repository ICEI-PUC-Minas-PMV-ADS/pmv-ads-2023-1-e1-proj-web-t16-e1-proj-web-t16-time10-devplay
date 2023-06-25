import React from 'react'
import LogoDevPlay from "../images/DevPlayLogo.svg"
import styled from "styled-components";
import { Triangle } from "react-loader-spinner"

const LoadingAnimation = styled.div`
border: 2px solid black
`
function Loanding() {
  return (
    <LoadingAnimation >
        <img src={LogoDevPlay} alt="logo" width= "500px" />
        <Triangle
  height="80"
  width="80"
  color="black"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName="" 
  visible={true}
/>
           </LoadingAnimation>
  )
}

export default Loanding