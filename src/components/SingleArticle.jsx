import React, { Component } from "react";
import * as api from "../api";
import Comments from "./Comments";

export default class SingleArticle extends Component {
  state = {
    articleInfo: {},
    isLoading: true,
  };

  componentDidMount() {
    this.fetchSingleArticle();
  }
  render() {
    const { articleInfo, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <main>
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.body}</p>
        <p>{articleInfo.created_at}</p>
        <p>{articleInfo.votes} votes</p>
        <p>{articleInfo.topic}</p>
        <p>{articleInfo.author}</p>
        <p>{articleInfo.commentCount}</p>
        <Comments article_id={articleInfo.article_id} />
        <p>{articleInfo.article_id}</p>
      </main>
    );
  }

  fetchSingleArticle(article_id) {
    console.log(this.props);
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ articleInfo: article, isLoading: false });
    });
  }
}
