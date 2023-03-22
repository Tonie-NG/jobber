import axios from "axios";
import { useEffect, useState } from "react";
import { RAPID_API_KEY } from "react-native-dotenv";

interface useFetchProps {
  endpoint: string;
  query: object;
  oops?: boolean;
}

export const useFetch = ({ endpoint, query, oops }: useFetchProps) => {
  const [data, setData] = useState<Array<any>>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsPending(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);

      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error);
      alert("Error fetching data");
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [oops]);

  const refetch = () => {
    setIsPending(true);
    fetchData();
  };

  return { data, isPending, error, refetch };
};
