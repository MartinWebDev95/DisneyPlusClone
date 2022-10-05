import { useState, useEffect } from 'react';

function useFetchFromApi(url = '') {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      const response = await fetch(url);
      const d = await response.json();

      setData(d);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetchFromApi;
