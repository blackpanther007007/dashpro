import React from 'react'
import styled from 'styled-components'
import SearchBar from './searchbar';
import Allcards from './allcards';
function Content() {
  return (
<>
    <Container>
    <SearchBar></SearchBar>
     <Allcards></Allcards>
    </Container>
</>
  )
}
const Container = styled.div`
  display: flex;
  color: white;
  width: 70%;
  justify-content: flex-start;
  flex-direction: column;
  /* border:2px solid red; */
  padding: 7px;
  margin: 10px;
  height: 98%;
  background-color: whitesmoke;
  border-radius: 10px;
`;

export default Content