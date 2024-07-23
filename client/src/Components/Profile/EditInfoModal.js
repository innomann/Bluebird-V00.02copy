import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";


function EditInfoModal
(props) {
  return (
    <Modal
      show={props.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.onHide}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Modal.Header aria-label="Hide" closeButton>
        <Modal.Title
          style={{
            fontSize: "1.2rem",
            background: "#FFFF00",
          }}
        >
          <span>Edit intro</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="profile__modal ">
        

        <div style={{ display: "flex", gap: 34 }}>
          <TextField
            className="mt-3 mb-5 mr-2"
            variant="outlined"
            size="small"
            type="text"
            fullWidth
            id="firstName"
            value={""}
            label="First Name"
            name="firstName"
            onChange={""}
            required
          />

          <TextField
            className="mt-3 mb-5"
            variant="outlined"
            size="small"
            type="text"
            fullWidth
            id="lastName"
            value={""}
            label="Last Name"
            name="lastName"
            onChange={""}
            required
          />
        </div>
        {/* Headline */}
        <TextField
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="headLine"
          value={""}
          label="HeadLine"
          name="headLine"
          onChange={""}
          required
          className="mb-3"
        />
        {/* Country */}

        <TextField
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="country"
          value={""}
          label="Country"
          name="country"
          onChange={""}
          required
          className="mb-3"
        />
        {/* Location */}

        <TextField
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="location"
          value={""}
          label="Location"
          name="location"
          onChange={""}
          required
          className="mb-3"
        />
        {/* Industry */}

        <TextField
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="industry"
          value={""}
          label="Industry"
          name="industry"
          onChange={""}
          required
          className="mb-3"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditInfoModal;
