import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Nav from "../../components/Nav";
import { duotoneForest } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostDiv } from "../../~styled/postDiv";
import { PostTag } from "../../components/PostList";
import { duotoneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MainDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: "Raleway", sans-serif;
  margin-bottom: 5%;

  h1 {
    font-size: 2.25rem;
    margin-left: 27%;
    box-sizing: border-box;
    max-width: 760px;
    color: #4a5568;
    font-weight: 600;
    line-height: 1.2;
    padding-bottom: 16px;
    @media (max-width: 1046px) {
      margin: 0 auto;
      text-align: center;
    }
    @media (max-width: 760px) {
      margin: 0 auto;
      font-size: 1.8rem;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  .comment-section {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    max-width: 760px;
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    margin-left: 27%;
    @media (max-width: 1024px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (max-width: 640px) {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={duotoneLight}
        language={language}
        children={value}
        customStyle={{
          borderRadius: "8px",
          fontFamily: `"Raleway", sans-serif`,
        }}
      />
    );
  },
};

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;
  const blogPostTitle = frontmatter.title.split(" ").join("-");

  return (
    <MainDiv pageTitle={`${siteTitle} | ${frontmatter.title}`}>
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content="https://agirl.codes/post/${blogPostTitle}"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${frontmatter.title}`} />
        <meta property="og:description" content={frontmatter.description} />
        <meta name="description" content={frontmatter.description}></meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={frontmatter.description} />
        <meta name="twitter:title" content={frontmatter.title} />
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
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>{frontmatter.title}</title>
      </Head>

      <Nav />
      <article>
        <div>
          <h1>{frontmatter.title}</h1>
          <div className="comment-count-view">{/* Comment Counts */}</div>
          <PostDiv>
            <aside className="sidebar-container">
              <div className="sidebar-content">
                <p>{frontmatter.fullDate}</p>
                <p>
                  <PostTag>{frontmatter.tags}</PostTag>
                </p>
                <Link href="/">
                  <p className="sidebar-backlink">
                    <img src="/back-arrow-1767531.svg" alt="back arrow" />
                    <a>Back to post</a>
                  </p>
                </Link>
              </div>
            </aside>
            <div className="markdown-content">
              <ReactMarkdown renderers={renderers} source={markdownBody} />
            </div>
          </PostDiv>
        </div>
      </article>
    </MainDiv>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
