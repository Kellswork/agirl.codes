import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Nav from "../../components/Nav";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostDiv } from "../../~styled/postDiv";
import { PostTag } from "../../components/PostList";

const MainDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
  margin-bottom: 5%;

  h1 {
    font-size: 2.25rem;
    text-align: center;
    box-sizing: border-box;
    max-width: 760px;
    color: #4a5568;
    font-weight: 600;
    margin: 0 auto;
    line-height: 1.2;
    padding-bottom: 26px;
    @media (max-width: 760px) {
      font-size: 1.8rem;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={duotoneDark}
        language={language}
        children={value}
        customStyle={{
          borderRadius: "4px",
          fontFamily: `"Work Sans", sans-serif`,
        }}
      />
    );
  },
};

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <MainDiv pageTitle={`${siteTitle} | ${frontmatter.title}`}>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <title>agirl.codes/{frontmatter.title}</title>
      </Head>

      <Nav />
      <article>
        <div>
          <h1>{frontmatter.title}</h1>
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
