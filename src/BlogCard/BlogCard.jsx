import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BlogCard({authorName, id, posts, likes}) {
    // console.log(posts)
  return (
  <div className="col-md-4">
      <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{authorName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Link to="/post" state={{posts, authorName}} > Get Data </Link>
      </Card.Body>
    </Card>
  </div>
  );
}

export default BlogCard;