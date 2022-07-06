import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TableHeadModal from "./TablHeadModal";

const Details = (
  props: {
    starship: {
      name: string;
      cost_in_credits: string;
      cargo_capacity: string;
      length: string
      };
  }
) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{props.starship.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-sm table-bordered table-hover">
            <TableHeadModal />
            <tbody>
              <tr>
                <td>Cost in credits</td>
                <td>{props.starship.cost_in_credits}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Cargo capacity</td>
                <td>{props.starship.cargo_capacity}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Length</td>
                <td>{props.starship.length}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Details;
