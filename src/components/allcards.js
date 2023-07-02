import React from 'react'
import styled from 'styled-components'
import Card from './card';
import { useState } from 'react';
import card1s from '../assets/icons/card1.svg'
import card2s from '../assets/icons/card2.svg'
import card3s from '../assets/icons/card3.svg'
import card4s from '../assets/icons/card4.svg'
function Allcards() {
  const [card1,setcard1]=useState({
     "background-color":"#ddefe0"
  })
  const [card2,setcard2]=useState({
    "background-color":"#f4ecdd"
 })
 const [card3,setcard3]=useState({
    "background-color":"#f4ecdd"
 })
 const [card4,setcard4]=useState({
    "background-color":"#dee0ef"
 })

  return (
   <>
      <Container>
       <Card image={card1s} styles={card1} title="Total Revenues"  amount="$2,129,430"></Card>
       <Card image={card2s} styles={card2} title="Total Transactions"  amount="$1,520" ></Card>
       <Card image={card3s} styles={card3} title="Total Likes"  amount="$9,721"></Card>
       <Card image={card4s} styles={card4} title="Total Users"  amount="$892"></Card>
      </Container>
   </>
  )
}

const Container = styled.div`
  display: flex;
  color: white;
  width: 96%;
  justify-content: space-between;
  flex-direction: row;
  border:2px solid red;
  padding: 7px;
  margin: 10px;
  height: 18%;
  background-color: whitesmoke;
  border-radius: 10px;
`;
export default Allcards