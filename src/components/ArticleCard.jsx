import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  return (
    <section>
      <Link to={`/articles/${props.article.article_id}`}>
        {props.article.title}{" "}
      </Link>
    </section>
  );
};

export default ArticleCard;
