import React from 'react';
import Card from 'react-bootstrap/Card';
import Blocks from './Blocks';

const CopyBlockDisplayPage = () => {

  return (
    <>
      <Card>
        <Card.Title>
          <h1>CopyBlocks and their Themes</h1>
        </Card.Title>
        <Card.Body>
          <Blocks />
        </Card.Body>
      </Card>
    </>
  );
};

export default CopyBlockDisplayPage;
