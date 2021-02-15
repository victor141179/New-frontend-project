import axios from "axios";
export const getTopics = () => {
  return axios
    .get("https://victor-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      // console.log(data.topics);
      return data.topics;
    });
};

export const getArticles = (sort_by) => {
  return axios
    .get("https://victor-nc-news.herokuapp.com/api/articles", {
      params: { sort_by: sort_by },
    })
    .then(({ data }) => {
      // console.log(data.articles);
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(`https://victor-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      // console.log(data);
      return data.article;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://victor-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
      console.log(data.comments);
    });
};
export const deleteCommentsByCommentId = (comment_id) => {
  return axios
    .delete(`https://victor-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then((res) => {
      console.log(res);
    });
};
