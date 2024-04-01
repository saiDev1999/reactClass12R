import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomSpinner from '../../spinner/spinner';

function CustomCard({name,description,imageURL,loaderVisible}) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={imageURL} width={50} height={100} />
      <Card.Body>
        {
            loaderVisible
            ?
            <CustomSpinner/>
            :null
        }
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;