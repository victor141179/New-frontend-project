import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    console.log(this.props);
    this.fetchArticles();
  }
  render() {
    const { articles } = this.state;
    const listTitle = "ALL";

    return (
      <main>
        <h3> {listTitle}articles</h3>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }

  fetchArticles() {
    api.getArticles().then((articles) => {
      // console.log(articles);
      this.setState({ articles });
    });
  }
}
