import styled from "styled-components";

export const PostDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .markdown-content {
      width: 90%;
      overflow-x: scroll;
    }
  }
  .sidebar-container {
    width: 25%;
    max-width: 250px;
    @media (max-width: 1040px) {
      max-width: 100%;
      width: 70%;
      padding-bottom: 3%;
    }
    .sidebar-content {
      p {
        padding-top: 20px;
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e2e8f099;
        font-size: 18px;
        color: #475261;
      }
      .sidebar-backlink {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 24px;
        }
      }
    }
  }
  .markdown-content {
    padding: 16px 32px 32px;
    box-sizing: border-box;
    max-width: 760px;
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: white;
    color: #374252;
    line-height: 28px;
    list-style: circle;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      padding-top: 30px;
      padding-bottom: 12px;
    }
    p {
      padding-top: 10px;
      padding-bottom: 10px;
      pre {
        border-radius: 4px;
      }
      code {
        background: #80808030;
        padding: 2px 4px;
        border-radius: 2px;
        color: #d20404;
      }
      em {
        font-style: italic;
        color: #93f;
      }
    }
    ul {
      list-style: circle;
      padding-left: 20px;
    }
    a,
    a:visited {
      color: #3d9970;
      text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
      opacity: 0.9;
      text-decoration: none;
    }
    blockquote,
    q {
      quotes: none;
      background: #f9fafb;
      border-left: 2px solid #93f;
      padding-left: 10px;
    }
  }
`;
