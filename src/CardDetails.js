import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardDetails = ({data}) => {

    console.log('data in card' , data)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.photo} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
