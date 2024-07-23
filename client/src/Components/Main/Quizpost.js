import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { getQuiz, quizPost } from "../../Redux/actions/quizAction";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Images } from "lucide-react";

function Quizpost(props) {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([null, null,null,null]);

   const [previewImage, setPreviewImage] = useState("");
   const [currentImage, setCurrentImage] = useState();

  const [post, setPost] = useState({
    title:"",
    question: "",
    options: [],
    answer: "",
    explenation:"",
    image: currentImage,
  });


 
  const handleChange = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const addOptions = (index,value)=> {
   const updateOption = [...options];
   updateOption[index] = value
   setOptions(updateOption)
   setPost({ ...post, options: options });
   console.log(options)
  }

  //Watches and update options instantly
  useEffect(() => {
    const updateOption = [...options];
    setOptions(updateOption);
    setPost({ ...post, options: options });
  }, [options]);


  useEffect(() => {
    getQuiz(dispatch)
  }, [getQuiz]);

 

   const handlePhoto = (event) => {
    event.preventDefault();
    const selectedFiles = event.target.files; 
    setCurrentImage(event.target.files?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setPost({ ...post, [event.target.name]: selectedFiles?.[0] });
    console.log("Image",post);
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("title", post.title);
     formData.append("question", "hello its me");
     formData.append("answer", post.answer);
     formData.append("options", post.options);
     formData.append("explenation", post.explenation);
      //if (!currentImage) return;
     formData.append("file", currentImage);
     console.log(formData);
     quizPost(post);
   };


  return (
    <Modal
      show={props.show}
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
        <TextField
          className="mt-3 mb-5"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="option"
          value={post.title}
          label="title"
          name="title"
          onChange={handleChange}
          required
        />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ouestion</Form.Label>
          <Form.Control
            as="textarea"
            onChange={handleChange}
            name="question"
            rows={3}
          />
        </Form.Group>

        <TextField
          className="mt-3 mb-5"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="option"
          value={options[0]}
          label="option"
          name="option"
          onChange={(e) => addOptions(0, e.target.value)}
          required
        />

        <TextField
          className="mt-3 mb-5"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="option"
          value={options[1]}
          label="option"
          name="option"
          onChange={(e) => addOptions(1, e.target.value)}
          required
        />
        <TextField
          className="mt-3 mb-5"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="option"
          value={options[2]}
          label="option"
          name="option"
          onChange={(e) => addOptions(2, e.target.value)}
          required
        />

        <TextField
          className="mt-3 mb-5"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          id="option"
          value={options[3]}
          label="option"
          name="option"
          onChange={(e) => addOptions(3, e.target.value)}
          required
        />

        <Form.Group className="mb-3" controlId="answer">
          <Form.Label>Correct answer</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={post.answer}
            name="answer"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="answer">
          <Form.Label>Explenation</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={post.explenation}
            name="explenation"
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>

      {previewImage && (
        <img
          className="h-20 w-32 rounded bg-current"
          src={previewImage}
          alt=""
        />
      )}

      <div className="flex flex-row items-center mt-4">
        <IconButton
          aria-label="upload"
          component="label" // THIS IS THE GENIUS CHANGE
        >
          <Images />
          <input
            hidden
            type="file"
            onChange={handlePhoto}
            name="image"
            accept="image/*"
          />
        </IconButton>
      </div>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Quizpost;
