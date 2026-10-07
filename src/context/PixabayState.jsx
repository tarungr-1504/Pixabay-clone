import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setimageData] = useState([]);
  const [query, setquery] = useState(["london"]);

  const api_key = "57656990-be246482494a8e71d4ef28130";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q= ${query}&image_type=photo&pretty=true&per_page=100`,
      );
      const data = await api.json();
      setimageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`,
    );
    const data = await api.json();
    setimageData(data.hits);
    console.log(data.hits);
  };
  return (
    <PixabayContext.Provider
      value={{ imageData, fetchImageByCategory, setquery }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
