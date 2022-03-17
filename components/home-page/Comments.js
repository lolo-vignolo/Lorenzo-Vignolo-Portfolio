import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import classes from "./commentList.module.css"


function Comments (){

    const [comments, setComments] = useState([])

    console.log(comments);
    useEffect(() => {
        fetch('/api/contact',{
            
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
        })
        .then((res)=>res.json())
        .then(data=> setComments(data.comments))
    }, [])
    
   
    return (
        <div className={classes.item}>
            <CommentList comments= {comments}  />
        </div>
    );
};

export default Comments;