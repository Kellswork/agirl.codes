import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
  .layout-content {
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    margin-right: 30px;
    @media (max-width: 640px) {
      flex-direction: column-reverse;
    }
    .post-content {
      margin-bottom: 8%;
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
`;

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <LayoutContainer>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QZXMHMEZWE"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-QZXMHMEZWE');
          </script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          ></link>
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
      </LayoutContainer>
      <Footer />
    </>
  );
}
