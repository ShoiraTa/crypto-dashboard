import React, { useEffect, useState } from "react";
import axios from "axios";

function NewFeed() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const sevenArticles = articles?.slice(0, 7);

  console.log(articles);
  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {sevenArticles?.map((article, _index) => (
        <div key={_index}>
         <a href={article.url}><p>{article.title}</p></a> 
        </div>
      ))}
    </div>
  );
}

export default NewFeed;
