import Link from "next/link";
import styled from "styled-components";

const HeaderCard = styled.div`
  width: 260px;
  margin-top:14px;
  text-align: center;
  padding-top: 20px;
  border-radius: 15px;
    border: 2px solid #bcccdc47;
  .card-icons {
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0px;
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
    padding: 15px;
    img {
      width: 40px;
      cursor: pointer;
    }
  }
  @media (max-width: 640px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .card-body {
    .card-name {
      font-size: 1.125rem;
      text-transform: uppercase;
      font-weight: bold;
      padding: 20px 20px 10px 20px;
    }
    .card-occupation {
      width: 80%;
      margin: 0 auto;
      padding: 4px 6px;
      background: #7f5bd5b0;
      border-radius: 10px;
      color: #ff0;
      font-size: 14px;
    }
  }
  .card-text {
    text-align: center;
    padding: 15px;
    letter-spacing: 1.5px;
    line-height: 1.3;
  }
  .card-image {
    img {
      width: 100px;
      height: 98px;
      border-radius: 50%;
      border: 2px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

export default function Header() {
  return (
    <>
      <header className="header">
        <HeaderCard className="header-card">
          <div className="card-body">
            <h3 className="card-name">Kelechi Ogbonna</h3>
            <h3 className="card-occupation">SOFTWARE DEVELOPER</h3>
            <div className="card-text">
              <p>
                Welcome to my little corner of the web where I share articles on
                frotend/fullstack development.
              </p>
            </div>
            <div className="card-icons">
              <Link href="https://www.linkedin.com/in/kelechi-ogbonna/">
                <img width="40px" height="40px" src="/linkedin.svg" alt="linkedin icon" />
              </Link>
              <Link href="https://github.com/Kellswork">
                <img width="40px" height="40px" src="/github.svg" alt="github icon" />
              </Link>
              <Link href="https://twitter.com/kelly_perrie">
                <img width="40px" height="40px" src="/twitter.svg" alt="twitter icon" />
              </Link>
            </div>
          </div>
        </HeaderCard>
      </header>
    </>
  );
}
