import React from "react";
import Image from "next/image";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import images from "../../../../assets/images";
import styled from "styled-components";
import Link from "next/link";

function Profile() {
  return (
    <ProfileContainer>
      <div className="profile_account">
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className="profile_account_img"
        />
        <div className="profile_account_info">
          <p>Shoaib Bhai</p>
          <small>x0384999382928283...</small>
        </div>
      </div>
      <div className="profile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt />
            <p>
              <Link href="/myprofile">My Profile</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaRegImage />
            <p>
              <Link href="/my-items">My Items</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaUserEdit />
            <p>
              <Link href="/edit-profile">Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter />
            <p>
              <Link href="/help">Help</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <TbDownload />
            <p>
              <Link href="/help">Disconnet</Link>
            </p>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div``;

export default Profile;
