import React from "react";
import Image from "next/image";
import styled from "styled-components";
import images from "../../../../assets/images";

function Notification() {
  return <NotificationContainer>
    <p>Notification</p>
    <div className="notification_box">
      <div className="notification_box_img">
        <Image src={images.user1} />
      </div>
      <div className="notification_box_info">
       <h4>random name</h4>
       <p>Measure action of user</p>
       <small>3 minutes ago</small>
      </div>
      <span className="notification_box_new"></span>
    </div>
  </NotificationContainer>;
}

const NotificationContainer = styled.div``;

export default Notification;
