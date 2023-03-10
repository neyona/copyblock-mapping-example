import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { FaExternalLinkAlt } from 'react-icons/fa';

import Title from '../components/Title';
import Blocks from '../components/Blocks';
import CodeBlockOne from './CodeBlockOne';
import CodeBlockTwo from './CodeBlockTwo';
import Spinner from '../components/Spinner';


const CodeBlock = () => {

  return (
    <>
    <Title
      title="Fortunate Cuttlefish | CodeBlocks"
      description="A Code Block article on Fortunate Cuttlefish"
      keywords="react-code-block, CodeBlock, cuttlefish, fortune, underwater, Django, React, SASS, accessibility, Monster Dreams"
    />
      <Card className="card-dark">
        <Card.Title>
          <Container align="center">
            <h1>How I Checked Out All The React CopyBlock Theme Choices, and How You Can Too!</h1>
            <p>Posted: March 12th, 2023</p>
          </Container>
        </Card.Title>
        <Card.Body>
          <CodeBlockOne />
          <span>Here is a </span><span>{" "}</span>
          <a
            href="https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>link to the react-code-block theme page <FaExternalLinkAlt /></span>
          </a>
          <span>.</span>
            <br />
            <br />
          <div align="center">
            <h3>As promised, available code block themes! * There are 39 of them *</h3>
          </div>
          <Blocks />
          <CodeBlockTwo />
        </Card.Body>
      </Card>
    </>
  );
};

export default CodeBlock;
