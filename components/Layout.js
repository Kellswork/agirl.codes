import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
  .layout-content {
    display: flex;
    justify-content: space-around;
  }
  .post-content {
    max-width: 768px;
    box-sizing: border-box;
    padding-left: 20px;
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
      <footer>Built by me! 😏</footer>
    </LayoutContainer>
  );
}
