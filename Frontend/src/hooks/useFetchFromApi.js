import { useState, useEffect } from 'react';
import getPageState from '../helpers/getPageState';

function useFetchFromApi({ apiCalls = [], namePage = '' }) {
  const [data, setData] = useState(getPageState(apiCalls[namePage]));
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getData = () => {
    setLoading(true);

    const { dataPage } = apiCalls[namePage];

    try {
      dataPage.forEach(({ call, state, title }) => {
        call.then((item) => {
          setData((prevState) => ({
            ...prevState,
            [state]: { data: item, title },
          }));
        });
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [apiCalls[namePage]]);

  return { data, isLoading, error };
}

export default useFetchFromApi;
