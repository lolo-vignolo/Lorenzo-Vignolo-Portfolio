import React from 'react';

const CommentList = ({comments}) => {
    return (
        
        <ul>
            {comments.map((com)=>{
                return(
                    <li key={com._id} >
                        <h3>{com.name}</h3>
                        <p>{com.message}</p>
                    </li>
                )
            })}

            
        </ul>
    );
};

export default CommentList;