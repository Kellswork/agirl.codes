import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 4vh;
  .nav-content {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }

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
  .logo {
    img {
      cursor: pointer;
    }
  }
`;
const MenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  input {
    display: none;
  }
  .open {
    background-color: #3c3c3c;
    width: 24px;
    height: 4px;
    display: block;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    top: 8px;
  }
  .open:before {
    content: "";
    background-color: #3c3c3c;
    width: 24px;
    height: 4px;
    display: block;
    border-radius: 2px;
    position: relative;
    top: -8px;
    transform: rotate(0deg);
    transition: all 0.3s ease;
  }
  .open:after {
    content: "";
    background-color: #3c3c3c;
    width: 24px;
    height: 4px;
    display: block;
    border-radius: 2px;
    position: relative;
    top: 4px;
    transform: rotate(0deg);
    transition: all 0.3s ease;
  }
  .menuOpen {
    width: 24px;
    height: 20px;
    display: block;
    padding: 15px;
    cursor: pointer;
    float: right;
  }
  .menuOpen:hover .open:before {
    top: -9px;
  }
  .menuOpen:hover .open:after {
    top: 5px;
  }
  .menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(156, 163, 175, 0.9);
  }
  .menu label {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    top: 20px;
    background-size: 100%;
    cursor: pointer;
  }
  .menu .menuContent {
    position: relative;
    top: 50%;
    font-size: 54px;
    text-align: center;
    padding-bottom: 20px;
    margin-top: -170px;
    width: 100%;
    height: 100%;
  }
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  .menu ul li a {
    display: block;
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    font-family: Trebuchet MS;
    text-transform: uppercase;
    padding: 10px 0;
  }
  .menu ul li a:hover {
    color: #ff8702;
  }

  .menu ul li:hover {
    background: white;
  }
  .menuEffects {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }

  .menuEffects ul {
    transform: translateY(0%);
    transition: all 0.5s;
  }
  #menuToggle:checked ~ .menuEffects {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
  }
  #menuToggle:checked ~ .menuOpen .open {
    background-color: transparent;
  }
  #menuToggle:checked ~ .menuOpen .open:before {
    content: "";
    background-color: white;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  #menuToggle:checked ~ .menuOpen .open:after {
    content: "";
    background-color: white;
    transform: rotate(-45deg);
    position: relative;
    top: 0;
    right: 0;
    z-index: 1;
  }
  #menuToggle:not(:checked) ~ .menuEffects ul {
    transform: translateY(-30%);
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <div className="nav-content">
        <div className="logo">
          <Link href='/'>
          <img width="180px" height="76px" src="/logo.svg" alt="logo" />
          </Link>
        
        </div>
        <MenuArea id="menuArea">
          <input type="checkbox" id="menuToggle"></input>

          <label htmlFor="menuToggle" className="menuOpen">
            <div className="open"></div>
          </label>

          <div className="menu menuEffects">
            <label htmlFor="menuToggle"></label>
            <div className="menuContent">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
              
              </ul>
            </div>
          </div>
        </MenuArea>
      </div>
    </NavContainer>
  );
}