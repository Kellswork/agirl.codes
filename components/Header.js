import Link from "next/link";
import styled from "styled-components";

const HeaderCard = styled.div`
  width: 200px;
  border: 1px solid black;
  .card-icons {
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0px;
  }
  .card-body {
    padding: 10px;
  }
  .card-text {
    text-align: center;
  }
`;

export default function Header() {
  return (
    <>
      <header className="header">
        <HeaderCard className="header-card">
          <div className="card-image">
            <img src="/blog-image.jpg" alt="blog image" width="200px" height='180px' />
          </div>
          <div className="card-body">
            <div className="card-icons">
              <img src="/linkedin.svg" alt="linkedin icon" />
              <img src="/github.svg" alt="github icon" />
              <img src="/twitter.svg" alt="twitter icon" />
            </div>
            <div className="card-text">
              <p>
                Welcome to my little corner of the web where I share info on
                frontend techies...
              </p>
            </div>
          </div>
        </HeaderCard>
      </header>
    </>
  );
}
