import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { variableKeyword } from "./variableKeyword";

const MarkdownContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  margin-left: 4rem;
  overflow: auto;
  height: fit-content;
`;

export const Post = ({ match }) => {
  return (
    <MarkdownContainer className="markdown_container">
      <ReactMarkdown
        remarkPlugins={[gfm]}
        className="markdown"
        renderers={{ code: MarkdownStyler }}
      >
        {variableKeyword}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

const MarkdownStyler = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};
