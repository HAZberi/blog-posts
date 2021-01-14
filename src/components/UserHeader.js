import React from "react";
import { connect } from "react-redux";

const UserHeader = ({  user }) => {



  return <div className="header">{user ? user.name : null}</div>;
};

const mapStateToProps = (state, props) => {
    return { user : state.users.find(user => user.id === props.userId) }
}


export default connect(mapStateToProps)(UserHeader);
