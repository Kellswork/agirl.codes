import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
  margin-bottom: 10%;
  .layout-content {
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    margin-right: 30px;
    @media (max-width: 640px) {
      flex-direction: column-reverse;
    }
    .post-content {
      margin-bottom: 10%;
      @media (max-width: 640px) {
        margin-bottom: 0%;
      }
    }
  }
  .post-content {
    max-width: 768px;
    box-sizing: border-box;
    padding-left: 20px;
  }
  footer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a88ee3;
    background: #f3f4f6;
    border-radius: 2px;
  }
`;

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <LayoutContainer>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>{pageTitle}</title>
      </Head>
      <Nav />
      <div className="layout-content">
        <Header />
        <section className="post-content">
          <div className="content">{children}</div>
        </section>
      </div>
      <footer>Built with next.js 💜</footer>
    </LayoutContainer>
  );
}
