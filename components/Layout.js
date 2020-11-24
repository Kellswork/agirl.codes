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
      margin-left: 0px;
      margin-right: 0px;
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
    @media (max-width: 460px) {
      padding-left: 0px;
    }
  }
`;

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  ...props
}) {
  return (
    <>
      <LayoutContainer>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-QZXMHMEZWE" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
            }}
          />
          <meta name="google-site-verification" content="V30u2_77VrbrBBTRxneUbIN-QZzZKLT8Q-p_1xCvBSk" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content="agirl.codes" />
          <meta name="description" content={pageDescription}></meta>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:site" content="@kelly_perrie" />
          <meta name="twitter:creator" content="@kelly_perrie" />
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
