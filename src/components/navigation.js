import React from "react";
import styled from "styled-components";
import dash_icon from '../assets/icons/dashboard_icon.svg';
import transaction_icon from '../assets/icons/transaction_icon.svg';
import schedule_icon from '../assets/icons/schedule_icon.svg';
import users_icon from '../assets/icons/user_icon.svg';
import setting_icon from '../assets/icons/setting_icon.svg';





function Nav() {
  return (
    <>
      <Container>
        <Header>
          <div className="title">Board</div>

          <div className="options">
            <div className="slection">
              <img src={dash_icon} alt="" className="icons" />
              <span>dashboard</span>
            </div>
            <div className="slection">
              <img src={transaction_icon} alt="" className="icons" />
              <span>transaction</span>
            </div>
            <div className="slection">
              <img src={schedule_icon} alt="" className="icons" />
              <span>Schedules</span>
            </div>
            <div className="slection">
              <img src={users_icon} alt="" className="icons" />
              <span>Users</span>
            </div>
            <div className="slection">
              <img src={setting_icon} alt="" className="icons" />
              <span>Settings</span>
            </div>
          </div>
        </Header>
        <Footer>
          <div className="help">
            <a href="">help</a>
          </div>
          <div className="contact">
            <a href="">conatct</a>
          </div>
        </Footer>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  color: white;
  width: 20%;
  justify-content: space-between;
  flex-direction: column;
  /* border:2px solid red; */
  padding: 7px;
  margin: 10px;
  height: 98%;
  background-color: black;
  border-radius: 10px;
`;
const Header = styled.div`
  margin: 10px;
  .title {
    display: flex;
    /* justify-content: center; */
    align-items: start;
    font-size: 24px;
    /* border: 2px solid red; */
    height: 24%;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
  }
  .options {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    font-weight: 0.4;
    flex-direction: column;
    /* border: 2px solid red; */
    height: 70%;
    margin: 0px;
    padding: 10px;
    border-radius: 5px;
  }
  .slection {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* flex-direction: column; */
    /* border: 1px solid yellow; */
    border-radius: 5px;
    img{
        margin: 10px;
    }
  }
  
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  .help {
    a {
      text-decoration: none;
      color: white;
    }
  }
  .contact {
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Nav;
