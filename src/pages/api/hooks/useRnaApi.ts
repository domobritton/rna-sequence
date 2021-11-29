import { useState, useEffect } from 'react';

import { RnaData } from '../rna/model';

const useRnaApi = () => {
  const [data, setData] = useState<RnaData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('api/rna');
      const newData = await response.json();
      setData(newData[0].data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error };
};

export default useRnaApi;
