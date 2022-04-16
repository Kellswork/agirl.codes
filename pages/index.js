import styled from 'styled-components'
import PostList from '../components/PostList'
import Layout from '../components/Layout'
import matter from 'gray-matter'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home({ posts, title, description, ...props }) {
  return (
    <Layout pageTitle={title} pageDescription={description} pageImage={image}>
      <main>
        <PostList posts={posts} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))
  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
      image: configData.default.image
    }
  }
}
