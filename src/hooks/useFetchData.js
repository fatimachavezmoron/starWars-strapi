import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: localStorage.getItem("user") ? headers : ''
        });
        const json = await res.json()

        setResult(json);
        setLoading(false);
      } catch(err) {
        setError(err);
        setLoading(false)
      }
    })();
  }, [url]);

  return {loading, result, error}
  
}