import { MyAvatar } from "../Main/UserAvatar";
import { Images } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../primitives/Button";
import { Dialog, DialogContent } from "../primitives/Dialog";
import { Separator } from "../primitives/Separator";
import { Textarea } from "../primitives/TextArea";
import { connect } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import "../../styles/globals.css";
import { postService } from "../../Redux/actions/postActions";
import axios from "axios";

const WriteNewPostDialog = (userState: any, props: any) => {
  const user = userState.userState.user;
  const [text, setText] = useState("");
  const isPostButtonDisabled = text === "";
  const [isWriteDialogOpen, setWriteDialogOpen] = useState(true);
  const dispatch = useDispatch();

  // hide the modal
  const hideModal = () => {
    setWriteDialogOpen(false);
    window.location.reload();
  };

  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  console.log(user)
  const [post, setPost] = useState({
    description: text,
    image: currentImage,
    firstname: user.firstname,
    lastname:  user.lastname,
    email: user.email,
  });

  const handlePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(event.target.files?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setPost({ ...post, [event.target.name]: selectedFiles?.[0] });
    setText(event.target.value);
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    setText(event.target.value);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const subMit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", post.description);
    formData.append("firstname", user.firstname);
    formData.append("lastname", post.lastname);
    formData.append("email", user.email);
    if (!currentImage) return;
    formData.append("file", currentImage);
    console.log("Post", post, currentImage);


  axios
    .post("http://localhost:5000/api/posts/postimage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
      window.location.href = "./home";
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      {isWriteDialogOpen && (
        <Dialog open onOpenChange={() => hideModal()}>
          <DialogContent className="top-8 p-0">
            <div className="p-6">
              <div className="flex flex-row items-center">
                <MyAvatar />
                <div className="ml-3">
                  <div className="text-lg font-semibold">
                    {user.firstname} {user.lastname}
                  </div>
                  <div className="text-sm">Post to anyone</div>
                </div>
              </div>

              <Textarea
                placeholder="What do you want to talk about?"
                className="border-none outline-none text-lg p-0 text-zinc-600 mt-8 resize-none"
                // Override tailwind variable dynamically for this textarea
                // @ts-ignore
                style={{ "--tw-ring-color": "transparent" }}
                rows={12}
                name="description"
                onChange={handleChange}
              />
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
            </div>
            <Separator className="pt-0 mt-0" />
            <form onSubmit={subMit} encType="multipart/form-data">
              <div className="flex flex-row p-4 pt-0">
                <div className="w-full" />
                <Button
                  className={cn(
                    "rounded-3xl font-semibold",
                    !isPostButtonDisabled && "bg-blue-600"
                  )}
                  disabled={isPostButtonDisabled}
                  >
                  Post
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  userState: state.userState,
});

export default connect(mapStateToProps)(WriteNewPostDialog);
