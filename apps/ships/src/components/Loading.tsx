import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
class Loading extends Component {
  override render() {
    return (
      <Container>
        <Row className="center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }
}
export default Loading;
