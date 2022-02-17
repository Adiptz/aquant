import axios from "axios";
import store from "../redux/store";

import { API_KEY } from "./config";
import { getArticlesByCategorySuccess } from "../redux/Articles/articles.actions";

export const getArticlesByCategory = async (payload) => {
    const { category } = payload;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${category}`;
    const res = await axios.get(url);

    store.dispatch(getArticlesByCategorySuccess(res.data.articles));
}

export const getArticlesBySearch = async (payload) => {
    const { searchValue } = payload;
    const url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}`;
    const res = await axios.get(url);

    store.dispatch(getArticlesByCategorySuccess(res.data.articles));
}