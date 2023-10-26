import React from 'react'
import Article from './Article';

export default function ArticleList(props) {
    const articleComponents = props.posts.map((post) => (
        <Article key = {post.id} 
                 title = {post.title} 
                 date = {post.date} 
                 preview = {post.preview}
        />
      ));
  
      return <main>{articleComponents}</main>

}
