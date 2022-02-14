import React, { Component } from 'react';
import Post from '../../components/post/Post';
import axios from 'axios';

import './BlogPost.css';

export default class BlogPost extends Component {
   state = {
      posts: [],
   };

   getApi = () => {
       axios.get('http://localhost:3004/posts').then((result) => {
         this.setState({
            posts: result.data,
         });
      });
   }

   handleRemove = (data) => {
      axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
         this.getApi()
      })
   };

   componentDidMount() {
     this.getApi()
   }

   render() {
      return (
         <div className="container-blog">
            <p className="section-title">Blog Post</p>
            {this.state.posts.map((post) => {
               return (
                  <Post
                     key={post.id}
                      data={post}
                     remove={this.handleRemove}
                  />
               );
            })}
         </div>
      );
   }
}
