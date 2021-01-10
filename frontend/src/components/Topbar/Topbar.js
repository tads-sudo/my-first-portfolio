import React from "react";
import { TopbarContainer } from "./TopbarContainer";
import { TopbarWrapper } from "./TopbarWrapper";
import { TopbarMenu } from "./TopbarMenu";
import { TopbarLink } from "./TopbarLink";

export const Topbar = ({ toggle, isOpen }) => {
  return (
    <TopbarContainer isOpen={isOpen}>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink toggle={toggle} />
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};
