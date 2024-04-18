import React from 'react';
import styled from 'styled-components';
import ImgBanner from '../../assets/banner-header.png'
import { Navbar } from '../navbar/Navbar';


export const Header: React.FC = () => {
  return (
    <DivHeader >
      <Navbar/>
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



