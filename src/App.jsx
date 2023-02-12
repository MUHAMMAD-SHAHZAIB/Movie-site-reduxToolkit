import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration, getGenres } from "./store/homeSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector(state => state.home);
  console.log(url);

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/popular").then(res => {
      dispatch(getApiConfiguration(res));
      // console.log(res);
    });
  };

  return <div className="App">{url.total_pages}</div>;
}

export default App;
