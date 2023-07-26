import Card from "react-bootstrap/Card";
import homepg from "../../assets/home-page.jpg";

function Home() {
  return (
    <Card className="container bg-dark text-white my-5">
      <Card.Img className="w-100" src={homepg} alt="Card image" />
      <Card.ImgOverlay className="text-center py-5">
        <Card.Title className="fs-3 p-3">Home</Card.Title>
        <Card.Text className="fs-5 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, a
          incidunt! Quia magni dolorem perferendis doloribus a dolor eligendi
          velit?
        </Card.Text>
        <Card.Text className="fs-5 p-4">
          {" "}
          Lorem ipsum dolor sit amet consectetur.{" "}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home;
