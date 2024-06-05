import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Discover() {
  //discover nav menu

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <DiscoverContainer>
      {discover.map((el, i) => (
        <div key={i + 1} className="discover">
          <Link href={el.link}> {el.name}</Link>
        </div>
      ))}
    </DiscoverContainer>
  );
}

const DiscoverContainer = styled.div``;

export default Discover;
