import React from 'react'
import styled from 'styled-components'
import Nav from './navigation';
import Content from './content';

function Dashboard() {
  return (
    <div>
      <Container>
       <Nav></Nav>
       <Content></Content>
      </Container>
    </div>
  )
}

const Container=styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-direction: row;
 border:2px solid red;
 padding: 10px;
 margin:10px;
 height:auto;
 height:600px;
 border-radius:10px;

`

export default Dashboard