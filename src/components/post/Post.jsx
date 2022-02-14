import React from 'react';

const Post = (props) => {
   return (
      <div className="card">
         <div className="img-wrapper">
            <img
               src="https://placeimg.com/200/150/tech"
               className="App-logo"
               alt="dumy"
            />
         </div>
         <div className="desc">
            <p className="title">{props.title}</p>
            <p className="desc-wrapper">{props.body}</p>
            <button className="btn-remove" onClick={props.remove}>Remove</button>
         </div>
      </div>
   );
};

export default Post;
