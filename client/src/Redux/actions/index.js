// signout functionality 
export function signOutAPI() {
  return (dispatch) => {
    console.log("Sign out function got hitted")

  };
}

// set article statuses

export function getArticlesAPI () {
  return(payload) => {
     console.log("GetArticles function got hitted");
  }
 
};

// set article statuses

export function postArticleAPI () {
    return (payload) => {
      console.log("PostArticles function got hitted");
    };
};

