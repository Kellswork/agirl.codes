import Head from 'next/head'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Nav from '../components/Nav'
import { PostDiv } from '../~styled/postDiv'
import { PostTag } from '../components/PostList'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Subscribe from '../components/Subscribe'

const MainDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'inter', sans-serif;
  margin-bottom: 5%;

  h1 {
    font-size: 2.25rem;
    margin-left: 25%;
    box-sizing: border-box;
    max-width: 760px;
    color: #4a5568;
    font-weight: 600;
    line-height: 1.2;
    padding-bottom: 16px;
    @media (max-width: 1040px) {
      margin: 0 auto;
      text-align: center;
    }
    @media (max-width: 760px) {
      font-size: 1.8rem;
      width: 94%;
      margin: 0 auto;
    }
    @media (max-width: 460px) {
      font-size: 1.6rem;
      width: 90%;
      margin: 0 auto;
    }
  }
  .markdown-content h3 {
    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }
  .markdown-content h4 {
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 2px;

    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }
  .markdown-content {
    line-height: 2;
  }
  .markdown-content strong {
    font-weight: bold;
  }
  .markdown-content p {
    padding-left: 2px;
  }
  .markdown-content img {
    width: 100%;
  }
  .sub-div {
    width: 75%;
    margin-left: 25%;
    margin-top: 30px;

    @media (max-width: 1040px) {
      margin: 0 auto;
      width: 75%;
    }
    @media (max-width: 890px) {
      width: 90%;
    }
    @media (max-width: 560px) {
      width: 100%;
    }
  }
`

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        children={value}
        customStyle={{
          borderRadius: '10px',
          fontFamily: `"inter", sans-serif`
        }}
      />
    )
  }
}

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <MainDiv pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJ5QKRS');`
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={frontmatter.description} />
        <meta
          property="og:url"
          content={`https://www.agirl.codes${frontmatter.url}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta
          property="og:image"
          content={`https://www.agirl.codes${frontmatter.image}`}
        />
        <meta name="description" content={frontmatter.description}></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={frontmatter.description} />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta
          name="twitter:image"
          content={`https://www.agirl.codes${frontmatter.image}`}
        />
        <meta name="twitter:site" content="@kelly_perrie" />
        <meta name="twitter:creator" content="@kelly_perrie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.agirl.codes${frontmatter.url}`}
        ></link>
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
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJ5QKRS"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
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
                <p className="sidebar-backlink">
                  <img src="/back-arrow-1767531.svg" alt="back arrow" />
                  <a href="/" className="back-btn">
                    Back to post
                  </a>
                </p>
              </div>
            </aside>
            <div className="markdown-content">
              <ReactMarkdown renderers={renderers} source={markdownBody} />
            </div>
          </PostDiv>
        </div>
      </article>

      <div className="sub-div">
        <Subscribe />
      </div>
    </MainDiv>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../posts/${postname}.md`)
  const config = await import(`../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/${slug}`)

  return {
    paths,
    fallback: false
  }
}
