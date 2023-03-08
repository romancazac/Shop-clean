import axios from 'axios';
import  { useCallback, useState } from 'react'

export const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError ] = useState(null);

   const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
      
     
      try {
        setLoading(true);
          const data = await axios(url, {method, body, headers});
          setLoading(false);
       
          return data.data;
      } catch(e) {
          setLoading(false);
          setError(e.message);
          throw e;
      }
  };

  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError}
 
}