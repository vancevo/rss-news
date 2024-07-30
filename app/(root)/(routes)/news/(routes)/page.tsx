"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  console.log({ articles });

  const getArticles = async () => {
    try {
      const res = await axios.get("/api/news");
      console.log({ res });
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return <div></div>;
};

export default NewsPage;
