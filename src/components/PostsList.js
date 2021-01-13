import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions"

const PostList = (props) => {


    useEffect(()=>{
        props.getPosts();
    },[props])


    return (
        <div>PostLists</div>
    )
}

export default connect(null, { getPosts })(PostList);