import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "",
  };
  handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ sort_by: value }, () => {
      this.fetchArticles(this.state.sort_by);
    });
  };

  componentDidMount() {
    console.log(this.props);
    this.fetchArticles(this.state.sort_by);
  }

  render() {
    const { articles } = this.state;
    const listTitle = "ALL";

    return (
      <main>
        <label for="sort_by">chose sort method:</label>
        <select name="sort_by" id="sort_by" onChange={this.handleChange}>
          <option value="created_at">created_at</option>
          <option value="votes">votes</option>
          <option value="comment_count">comment_count</option>
        </select>

        <h3> {listTitle}articles</h3>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }

  fetchArticles(sort_by) {
    api.getArticles(sort_by).then((articles) => {
      // console.log(articles);
      this.setState({ articles });
    });
  }
}
