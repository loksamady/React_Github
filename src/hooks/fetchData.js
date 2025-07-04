import axios from "axios";
import { useEffect, useState } from "react";
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        console.log(error?.response?.status || error.message);
      }
    };
    fetchData();
  }, [url]); // <-- fix: add url here
  return { data };
};

export default useFetchData;
