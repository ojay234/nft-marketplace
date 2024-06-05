import React, { useState } from "react";
import styled from "styled-components";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "@/components/componentsIndex";
import images from "../../../assets/images";
import Image from "next/image";

function NavBar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideBarMenu, setOpenSideBarMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
    if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }
    if (btnText == "Notification") {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    }
    if (btnText == "Profile") {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(true);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideBarMenu) {
      setOpenSideBarMenu(true);
    } else {
      setOpenSideBarMenu(false);
    }
  };

  return (
    <SytledNavBarContainer>
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="logo">
            <Image
              src={images.logo}
              alt="NFT Market Place"
              width={100}
              height={100}
            />
          </div>
          <div className="input_box_container">
            <div className="input_box">
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className="search_icon" />
            </div>
          </div>
        </div>
        {/* End of Left Section */}
        <div className="navbar_container_right">
          {/* Discover Menu */}
          <div className="navbar_container_right_discover">
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className="navbar_container_right_discover_box">
                <Discover />
              </div>
            )}
          </div>
          {/* Help Center*/}
          <div className="navbar_container_right_help">
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className="navbar_container_right_discover_help_box">
                <HelpCenter />
              </div>
            )}
          </div>
          {/* notification*/}
          <div className="navbar_container_right_notify">
            <MdNotifications onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>
          {/* create button section */}
          <div className="navbar_container_right_button">
            <Button btnText="Create" />
          </div>

          {/* user profile */}
          <div className="navbar_container_right_profile_box">
            <div className="navbar_container_right_profile">
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu button*/}
          <div className="navbar_container_right_menuBtn">
            <CgMenuRight className="menu_icon" onClick={() => openSideBar()} />
          </div>
        </div>
      </div>

      {openSideBarMenu && (
        <div className="sidebar">
          <SideBar setOpenSideBarMenu={setOpenSideBarMenu} />
        </div>
      )}
    </SytledNavBarContainer>
  );
}

const SytledNavBarContainer = styled.div`
  width: 100%;
  padding-block: 1.5rem;
  position: relative;
  z-index: 111111111;

  .navbar_container {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default NavBar;
