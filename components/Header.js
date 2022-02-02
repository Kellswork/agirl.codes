import Link from 'next/link'
import styled from 'styled-components'

const HeaderCard = styled.div`
  width: 260px;
  margin-top: 10px;
  text-align: center;
  padding-top: 20px;
  border-radius: 15px;
  border: 2px solid #bcccdc47;

  @media (max-width: 640px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
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

  .card-name {
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .card-occupation {
    background: #7f5bd5b0;
    color: #ff0;
    font-size: 14px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .card-text {
    padding-top: 10px;
    letter-spacing: 1.5px;
    line-height: 1.3;
    padding-bottom: 10px;
  }
  .card-image {
    img {
      width: 100px;
      height: 98px;
      border-radius: 50%;
      border: 2px solid rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 900px) {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 96%;
    text-align: left;
    border-radius: 4px;

    .card-details {
      padding-left: 20px;
    }
    .card-occupation {
      border-radius: 4px;
      padding-left: 5px;
      display: inline-block;
      padding-right: 5px;
    }
    .card-text {
      letter-spacing: 1.3px;
      line-height: 1.5;
    }
    .card-icons {
      padding: 0;
    }
  }
`

export default function Header() {
  return (
    <>
      <header className="header">
        <HeaderCard className="header-card">
          <div className="card-body">
            <div className="card-details">
              <h3 className="card-name">Kelechi Ogbonna</h3>
              <h3 className="card-occupation">FRONTEND DEVELOPER</h3>
              <div className="card-text">
                <p>
                  Welcome to my little corner of the web where I share articles
                  on frotend development.
                </p>
              </div>
            </div>
            <div className="card-icons">
              <Link href="https://www.linkedin.com/in/kelechi-ogbonna/">
                <img
                  width="40px"
                  height="40px"
                  src="/linkedin.svg"
                  alt="linkedin icon"
                />
              </Link>
              <Link href="https://github.com/Kellswork">
                <img
                  width="40px"
                  height="40px"
                  src="/github.svg"
                  alt="github icon"
                />
              </Link>
              <Link href="https://twitter.com/kelly_perrie">
                <img
                  width="40px"
                  height="40px"
                  src="/twitter.svg"
                  alt="twitter icon"
                />
              </Link>
            </div>
          </div>
        </HeaderCard>
      </header>
    </>
  )
}
