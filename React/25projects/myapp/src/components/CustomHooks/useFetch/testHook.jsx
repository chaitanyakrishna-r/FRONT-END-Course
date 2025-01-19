import useFetch from "./useFetch";

function UseFetchHookTest() {
  const url = "https://dummyjson.com/products";
  const { pending, error, result } = useFetch(url);
  // console.log(result);
  return (
    <div>
      <h1>useFetch</h1>

      {pending ? <h3>data is Loading! please wait...</h3> : null}

      {error ? <h3>{error}</h3> : null}

      <div>
        {result && result.products && result.products.length
          ? result.products.map((items) => {
            return  <h2 key={items.id}>{items.title}he</h2>;
            })
          : null}
      </div>
    </div>
  );
}
export default UseFetchHookTest;
