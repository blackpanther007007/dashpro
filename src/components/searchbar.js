import React from "react";
import styled from "styled-components";
import notification_icon  from '../assets/icons/noti.svg'
import search_icon from '../assets/icons/search_icon.svg'
import '../styles/searchbar.css';
function SearchBar() {
  return (
    <>
      <Header>
        <div className="left_header">
          <span> Dashboard</span>
        </div>
        <div className="right_header">
          <div className="search_bar">
            <input className="search_icons" type="text" name="search_me " id="" />
            <img src={search_icon} alt="" className="search_icon" />
          </div>
          <img src={notification_icon} alt="" className="notifiaction" />
          <img src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="" className="profile_pic" />
        </div>
      </Header>
    </>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 2px solid red;
  padding: 10px;
  margin: 10px;
  height: auto;
  border-radius: 10px;
  width: 95%;
  border-radius: 7px;
  .left_header{
    color: black;
    font-size: 24px;
  }
  .right_header{
    align-items: center;
    justify-content: space-between;
    display: flex;
    width:250px;

  }
  .profile_pic{
    border-radius: 50%;
    border: 1px dotted black;
    width:20px;
    height:20px;
  }
  
  .search_bar{
    background: white;
    padding: 1px;
    border-radius: 17px;
    display: flex;
  }
  .search_icons{
    width: 128px !important;
    border:none !important;
}
.search_icon{
  margin-right: 10px;
}
  
`;



export default SearchBar;
