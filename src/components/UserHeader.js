import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";

const UserHeader = ({ userId, users, getUser }) => {

    useEffect(()=>{
        getUser(userId);
    }, [getUser, userId])

    const user = users.find(user => user.id === userId)

  return <div>{user ? user.name : null}</div>;
};

const mapStateToProps = state => {
    return { users : state.users }
}


export default connect(mapStateToProps, { getUser })(UserHeader);
