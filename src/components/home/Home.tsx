import React from 'react';
import styled from 'styled-components';
import ImgBanner from '../../assets/banner-header.png'


export const Home: React.FC = () => {
  return (
    <DivHeader >
    <img src={ImgBanner} alt="movie mastermind banner" />
  </DivHeader>
  );
}

const DivHeader = styled.div`
  img {
    height: 60vh; 
    width: 100%;
    object-fit: cover;
  }
`



