import React from 'react'
import styled from 'styled-components'

function Card({title,amount,image,styles}) {
  return (
    <> 
     <Container style={styles} >
      <div className="image_tag">
        <img src={image} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="amount">{amount}</div>
     </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  color: white;
  width: 20%;
  justify-content: space-evenly;
  flex-direction: column;
  border:2px solid red;
  padding: 7px;
  color :black;
  height: 80%;
  background-color: whitesmoke;
  border-radius: 10px;
  .image_tag{
    width:100%;
    border: 2px solid yellow;
    display:flex;
    justify-content:flex-end
  }
  .title{
    display: flex;
    justify-content: flex-start;
    font-size: 11px;
  }
  .amount{
    display: flex;
    justify-content: flex-start;
    font-weight: bolder;
    font-size: 20px;
  }

`;


export default Card;