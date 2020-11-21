import Link from "next/link";
import styled from "styled-components";

const DivList = styled.div`
  border-radius: 4px;
  padding-left: 20px;
  margin-bottom: 30px;
  padding: 10px 10px 10px 30px;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;
const PostTitle = styled.a`
  font-size: 1.87rem;
  text-decoration: none;
  font-weight: 700;
  padding-bottom: 10px;
  display: inline-block;
  color: #4a5568;
  cursor: pointer;
  text-transform: capitalize;
`;
const PostTag = styled.span`
  padding: 4px 6px;
  background: #7f5bd5b0;
  border-radius: 10px;
  color: #ff0;
  font-size: 14px;
  margin-right: 10px;
  margin-left: 8px;
`;
const PostDate = styled.span`
  padding: 4px 6px;
  background: #fbfc1b;
  color: #7f5bd5;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 8px;
`;
const PostText = styled.p`
  color: #2d3748;
  line-height: 1.3;
  padding: 8px;
`;
const PostData = styled.div`
  margin-bottom: 12px;
  margin-top: 6px;
`;

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div className="postlist">
      {!posts && <div>No posts!</div>}

      {posts &&
        posts.map((post) => {
          return (
            <DivList key={post.slug}>
              <div className="post-image"></div>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <PostTitle>{post.frontmatter.title}</PostTitle>
              </Link>
              <PostData>
                <PostTag>{post.frontmatter.tags}</PostTag>
                <PostDate className="post-date">
                  {post.frontmatter.date}
                </PostDate>
              </PostData>
              <PostText>{post.frontmatter.description}</PostText>
            </DivList>
          );
        })}
    </div>
  );
}
