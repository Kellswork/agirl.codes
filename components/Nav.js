import Link from "next/link";
import styled from 'styled-components';

const NavContainer = styled.nav`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .menu {
    display: flex;
    align-items: center;
    a {
      padding: 0px 6px;
    }
  }
`
export default function Nav() {
  return (
      <NavContainer className='nav'>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="menu">
            <a>Home</a>
            <a>Portfolio</a>
            <a>Subscribe</a>
        </div>
      </NavContainer>
  );
}
