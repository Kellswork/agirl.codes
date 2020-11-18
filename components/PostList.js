import Link from "next/link";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div className="postlist">
      {!posts && <div>No posts!</div>}

      {posts &&
        posts.map((post) => {
          return (
            <div key={post.slug}>
              <div className="post-image"></div>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <a>{post.frontmatter.title}</a>
              </Link>
              <div className="tags">{post.frontmatter.tags}</div>
              <p>
                {post.frontmatter.description} <span></span>
              </p>
              <a>read more</a>
            </div>
          );
        })}
    </div>
  );
}
