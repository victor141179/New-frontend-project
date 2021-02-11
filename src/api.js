import axios from "axios";
export const getTopics = () => {
  return axios
    .get("https://victor-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      // console.log(data.topics);
      return data.topics;
    });
};

export const getArticles = () => {
  return axios
    .get("https://victor-nc-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      console.log(data.articles);
      return data.articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(`https://victor-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      console.log(data);
      return data.article;
    });
};
