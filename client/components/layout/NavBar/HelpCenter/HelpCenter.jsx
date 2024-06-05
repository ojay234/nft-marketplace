import React from "react";
import Link from "next/link";
import styled from "styled-components";

function HelpCenter() {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
  ];
  return (
    <HelpCenterContainer>
      {helpCenter.map((el, i) => (
        <div className="helpCenter" key={i}>
          <Link href={el.link}>{el.name}</Link>
        </div>
      ))}
    </HelpCenterContainer>
  );
}

const HelpCenterContainer = styled.div``;

export default HelpCenter;
