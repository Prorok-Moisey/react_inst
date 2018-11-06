import React, { Component } from 'react';
import Post from './../../images/posts.png';
class Posts extends Component {
  render() {
    return (
				<div className="delitel_contain">
					<img className="delitel_image" src={Post} />
					<span className="delitel_text">POSTS</span>
				</div>
    );
  }
}

export default Posts;