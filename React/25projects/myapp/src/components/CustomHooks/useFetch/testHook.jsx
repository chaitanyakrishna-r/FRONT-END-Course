import { useState } from "react";
import useFetch from "./useFetch";

function UseFetchHookTest() {
  const [url, setUrl] = useState(null); // Initially, no URL is set
  const { pending, error, result } = useFetch(url || ""); // Fetch only when URL is set

  const handleFetchData = () => {
    setUrl("https://dummyjson.com/products"); // Set the URL when the button is clicked
  };

  return (
    <div>
      <h1>useFetch</h1>

      <button onClick={handleFetchData}>Get Data</button>

      {pending && <h3>Data is Loading! Please wait...</h3>}

      {error && <h3>{error}</h3>}

      <div>
        {result && result.products && result.products.length > 0 ? (
          result.products.map((item) => (
            <h2 key={item.id}>{item.title} he</h2>
          ))
        ) : (
          !pending && url && <h3>No products found</h3>
        )}
      </div>
    </div>
  );
}

export default UseFetchHookTest;
