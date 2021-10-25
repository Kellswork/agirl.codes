import Link from 'next/link'
import styled from 'styled-components'
import { DateTime } from 'luxon'

const DivList = styled.div`
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    width: 94%;
    margin: 0 auto;
  }
`
const PostTitle = styled.a`
  font-size: 1.7rem;
  line-height: 1.3;
  text-decoration: none;
  font-weight: 700;
  padding-bottom: 10px;
  display: inline-block;
  padding-left: 8px;
  color: #4a5568;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: #4a5568ba;
  }
  &:active {
    color: #034282;
  }
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
`
export const PostTag = styled.span`
  padding: 4px 6px;
  background: #7f5bd5b0;
  border-radius: 10px;
  color: #ff0;
  font-size: 14px;
  margin-right: 10px;
  margin-left: 8px;
`
const PostDate = styled.span`
  padding: 4px 6px;
  background: #fbfc1b;
  color: #7f5bd5;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 8px;
`
const PostText = styled.p`
  color: #2d3748;
  line-height: 1.6;
  padding: 8px 12px 26px 8px;
  border-bottom: 2px solid;
  --tw-border-opacity: 1;
  border-bottom-color: rgba(243, 244, 246, var(--tw-border-opacity));
`
const PostData = styled.div`
  margin-bottom: 12px;
  margin-top: 6px;
`

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  const postDataSortByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'm-d-yyyy')
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'm-d-yyyy')
    return afterDate - beforeDate
  })

  return (
    <div className="postlist">
      {!posts && <div>No posts!</div>}

      {posts &&
        postDataSortByDate.map((post) => {
          return (
            <DivList key={post.slug}>
              <div className="post-image"></div>
              <Link href={{ pathname: `/${post.slug}` }}>
                <PostTitle href={`/${post.slug}`}>
                  {post.frontmatter.title}
                </PostTitle>
              </Link>
              <PostData>
                <PostTag>{post.frontmatter.tags}</PostTag>
                <PostDate className="post-date">
                  {post.frontmatter.date}
                </PostDate>
              </PostData>
              <PostText>{post.frontmatter.description}</PostText>
            </DivList>
          )
        })}
    </div>
  )
}
