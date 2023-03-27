import { useState, useEffect } from 'react';
import getBrandState from '../helpers/getBrandState';

function useFetchFromApi({ apiCalls = [], brand = '' }) {
  const [data, setData] = useState(getBrandState(apiCalls[brand]));
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = () => {
    const { dataBrand } = apiCalls[brand];

    try {
      dataBrand.forEach(({ call, state, title }) => {
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
  }, [apiCalls[brand]]);

  return { data, isLoading, error };
}

export default useFetchFromApi;
