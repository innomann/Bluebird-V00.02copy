import axios from "axios";

// Register User
export const loginUser = async ({ email, password },dispatch,navigate) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://beta-v0-15-test-8ofx6duhx-innomann.vercel.app/api/users/login",
      { email, password },
      config
    );
    localStorage.setItem("deLinkUser", JSON.stringify(data));
    navigate("/");
  } catch (err) {
    console.log(err);
    //alert("Something is fucked")
    console.log("Something is wrong whith the server", err);
    return;
  }
};
