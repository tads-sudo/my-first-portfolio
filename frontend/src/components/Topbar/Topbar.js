import React from "react";
import { TopbarContainer } from "./TopbarContainer";
import { IconWrapper } from "./IconWrapper";
import { CloseIcon } from "./CloseIcon";
import { TopbarWrapper } from "./TopbarWrapper";
import { TopbarMenu } from "./TopbarMenu";
import { TopbarLink } from "./TopbarLink";

export const Topbar = ({ toggle, isOpen }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <IconWrapper onClick={toggle}>
        <CloseIcon />
      </IconWrapper>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink onClick={toggle} />
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};
