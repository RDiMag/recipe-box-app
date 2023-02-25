import React from 'react'
import { Card } from 'react-bootstrap';

const Recipe = ({ title, image, source, url }) => {
  return(
    <Card border="dark" style={{ width: ''}} className='recipe'>
      <Card.Img variant="top" src={image} alt="recipe" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Card.Text>
              <a href={url}>{source}</a>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Recipe