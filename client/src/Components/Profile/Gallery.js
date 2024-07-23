import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Redux/actions/postActions";



function Gallery(posts) {
  const dispatch = useDispatch();
 


  useEffect(() => {
    getPosts(dispatch);
  }, [getPosts]);

  return (
    <div class="absolute inset-x-0 top-20  min-h-[100svh]  grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible ">
      <div class="grid grid-cols-2 gap-2  ">
        {posts.posts === 0 ? (
          <h1>No posts</h1>
        ) : (
          posts.posts.map((artile) => {
            return (
              <div>
                <img
                  class="object-cover object-center h-40  max-w-full rounded-lg md:h-60"
                  src={artile.image}
                  alt=""
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    posts: state.articleState.articles,
  };
};

export default connect(mapStateToProps)(Gallery);
