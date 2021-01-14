import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const UserHeader = ({ userId, user, getUser }) => {

    useEffect(()=>{
        getUser(userId);
    }, [getUser, userId])


  return <div className="header">{user ? user.name : null}</div>;
};

const mapStateToProps = (state, props) => {
    return { user : state.users.find(user => user.id === props.userId) }
}


export default connect(mapStateToProps, { getUser })(UserHeader);
