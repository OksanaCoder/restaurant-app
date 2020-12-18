import React, { Component } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import dishes from "../data/menu.json";

class Home extends Component {

  selectNewDish = (dish) => {
    console.log("Dish selected", dish);
    this.props.history.push("/details/" + dish.id)
  };

  render() {
    console.log('HOME PROPS --> ', this.props)
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <h1>Welcome to STRIVESTAURANT!</h1>
            <p className="lead">The best dishes you can find on the web!</p>
            <hr className="my-2" />
            <p>Come and visit us, we can only cook Pasta!</p>
            <Carousel className="mt-2">
              {dishes.map((item) => {
                return (
                  <Carousel.Item key={item.id}>
                    <img src={item.image} alt={item.name} className="d-block w-100" onClick={() => this.selectNewDish(item)} />
                    <Carousel.Caption>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

