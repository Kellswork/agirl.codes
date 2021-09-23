import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #936bef;
  border-radius: 2px;
  border-top: 2px solid #a88ee336;
  padding-top: 20px;
  padding-bottom: 15px;
  @media (max-width: 640px) {
    position: relative;
    }
`;
export default function Footer() {
  return (
    <FooterDiv>
      <div>Built with next.js 💜</div>
    </FooterDiv>
  );
}
