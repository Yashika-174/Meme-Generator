import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

export default function MemeCard({image,title}){

    const navigate=useNavigate();


    function handleEdit(){
        navigate(`/edit?url=${image}`)
    }

    return (
<Card style={{ width: '15rem', margin:'20px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button onClick={handleEdit} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    )
}