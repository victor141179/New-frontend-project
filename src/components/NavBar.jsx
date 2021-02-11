import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

export default class NavBar extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    this.fetchTopics();
  }
  render() {
    // console.log(this.state);
    const { topics } = this.state;

    return (
      <div>
        {topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              {" "}
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </div>
    );
  }
  fetchTopics() {
    api.getTopics().then((topics) => {
      // console.log(topics);
      this.setState({ topics });
    });
  }
}
