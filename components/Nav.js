import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  max-width: 1024px;
  margin: 0 auto;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  .menu {
    display: flex;
    align-items: center;
    a {
      padding: 0px 6px;
      text-decoration: none;
      color: #4a5668;
      padding: 3px 6px 0px 6px;
      font-size: 18px;
    }
  }
  @media (max-width: 640px) {
      
}
`;
export default function Nav() {
  return (
    <NavContainer>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">Subscribe</Link>
      </div>
    </NavContainer>
  );
}
