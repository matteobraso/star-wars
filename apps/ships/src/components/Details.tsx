import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TableHeadModal from "./TablHeadModal";

export default function Details(
  this: unknown,
  props: {
    starship: {
      name:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      cost_in_credits:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      cargo_capacity:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
      length:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
    };
  }
): JSX.Element {
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
        <table className="table table-sm table-bordered table-hover">
          <Modal.Body>
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
          </Modal.Body>
        </table>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
