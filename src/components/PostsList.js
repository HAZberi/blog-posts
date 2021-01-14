import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ posts, getPostsAndUsers }) => {
  useEffect(() => {
    getPostsAndUsers();
  }, [getPostsAndUsers]);

  const renderListOf = (posts) => {
    if (posts.length === 0) return;
    return posts.map((post) => (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    ));
  };
  return <div className="ui relaxed divided list">{renderListOf(posts)}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPostsAndUsers })(PostList);
