import React, { Component } from "react";
import * as api from "../api";

export default class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    console.log(this.props);
    this.fetchCommentsByArticleId(this.props.article_id);
  }
  render() {
    const { comments } = this.state;
    console.log(comments);
    return (
      <section>
        {comments.map((comment) => {
          return (
            <li>
              <p>{comment.comment_id}</p>
              <p>{comment.body}</p>
              <p>{comment.author_id}</p>
              <p>{comment.created_at}</p>
            </li>
          );
        })}
      </section>
    );
  }

  fetchCommentsByArticleId(article_id) {
    api.getCommentsByArticleId(article_id).then((comments) => {
      this.setState({ comments });
      console.log(comments);
    });
  }
}
