import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';

export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const FetchFoodData = async() => {
    setLoading(true)
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    
    } catch (error) {
      setError("Error in data");
    }
  }

  useEffect(()=>{
    FetchFoodData();
    console.log(data)
  },[]);


  if(error) return <div>{error}</div>
  if(loading) return <div>loading....</div>
 
  return(
  <>
    <Container>
      <TopSection>
        <div className='logo'>
            <img src="\images\Foody Zone.svg" alt="logo" />
        </div>
        <div className='search'>
          <input type="text" placeholder='Search Food... '/>
        </div>
      </TopSection>
      <FilterContainer>
        <Btn>All</Btn>
        <Btn>Breakfast</Btn>
        <Btn>Lunch</Btn>
        <Btn>Dinner</Btn>
      </FilterContainer>
    </Container>
      <SearchResults data={data}/>
    </>
  ) 

  
};

export default App;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  padding: 16px;
 
  
  .search{
    input {
      border: 1px solid red;
      background-color: transparent;
      padding: 0 10px;
      height: 40px;
      border-radius: 5px;
      font-size: 16px;
      color: white ;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Btn = styled.button`
  border-radius: 5px;
  background-color:#ff4343 ;
  padding: 6px 12px;
  border: none;
  color: white;
`;

