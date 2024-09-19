import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      if (count < 5) { 
        setLoading(true);
      try {
        const response = await fetch(
          
        `https://dummyjson.com/products?limit=20&skip=${
          count * 20}`
        );
        const result = await response.json();
        console.log( result );

        
        setData((prevData)=>[...prevData , ...result.products]);
        setHasMore(result.products.length === 20);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    };
    fetchdata();
  }, [count]);

  const loadMore = () => {
    if (hasMore) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap:'10px',
      padding: '10px 10px 10px 30px'
      
    }}>
      {data.map((item, index) => (
        <div style={{
          width: '350px',
          height: '350px',
          border: 'solid 1px',
          
        }} key={index}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          
        </div>
      ))}
      <button 
      onClick={loadMore}
      style={{ padding: '10px' }}
      disabled={!hasMore || loading}
      
      >
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};
export default LoadMoreData;
