import { Modal } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import { IoCamera } from "react-icons/io5";

function AddProfilePic(props) {
  return (
    <div className="p-auto">
      <Modal
        className="my-modal"
        style={{
          height: "700px",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
        scrollable={true}
        show={props.modalShowx}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header
          closeButton
          autoFocus
          style={{ borderBottom: "0 none", color: "white" }}
          // onClick={() => this.setState({ modalShow: false })}
        >
          <Modal.Title
            style={{
              fontSize: "1.2rem",
              color: "white",
            }}
            id="contained-modal-title-vcenter"
          >
            <span>Profile Photo</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Avatar
            className="m-auto"
            style={{ width: "250px", height: "250px", borderRadius: "50%" }}
            src={
              "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            }
            alt="Profile"
          />
        </Modal.Body>
        <Modal.Footer style={{ borderTopColor: "gray" }}>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={""}
          />
          <label htmlFor="file">
            <IoCamera
              className="ml-4"
              style={{ color: "white", marginLeft: "10px" }}
            />
            <div>
              <span>Add Photo</span>
            </div>
          </label>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddProfilePic;
