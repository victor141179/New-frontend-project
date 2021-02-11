import React, { Component } from "react";
import * as api from "../api";

export default class SingleArticle extends Component {
  state = {
    articleInfo: {},
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }
  render() {
    const { articleInfo } = this.state;
    return (
      <main>
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.body}</p>
        <p>{articleInfo.created_at}</p>
        <p>{articleInfo.votes} votes</p>
        <p>{articleInfo.topic}</p>
        <p>{articleInfo.author}</p>
        <p>{articleInfo.commentCount}</p>
      </main>
    );
  }

  fetchSingleArticle(article_id) {
    console.log(this.props);
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ articleInfo: article });
    });
  }
}
