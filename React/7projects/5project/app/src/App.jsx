import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';

export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [fileterData, setFileterData]=useState(null);
  const [selectedBtn,setSelectedBtn] = useState('all');
 

  // data for button 
  const fitlerData = [
    {
      name:'All',
      type:'all'
    },
    {
      name:'Breakfast',
      type:'breakfast'
    },
    {
      name:'Lunch',
      type:'lunch'
    },
    {
      name:'Dinner',
      type:'dinner'
    }
  ]

  useEffect(()=>{
    const FetchFoodData = async() => {
      setLoading(true)
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFileterData(json);
        setLoading(false);
      
      } catch (error) {
        setError("Error in data");
      }
    }
    FetchFoodData();
    
  },[]);

// searching the food
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if(searchValue === ""){
      setFileterData(null);
    }
    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFileterData(filter);
  };

// filtering the food
  const filterFood = (type) => {
    if(type == "all"){
      setFileterData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
    )
    setFileterData(filter);
    setSelectedBtn(type);
  }

const logoHome = ()=>{
  setFileterData(data);
  setSelectedBtn("all");
}

  if(error) return <div>{error}</div>
  if(loading) return <div>loading....</div>
 
  return(
  <>
    <Container>
      <TopSection>
        <div className='logo'>
            <img onClick={logoHome} src="\images\Foody Zone.svg" alt="logo" />
        </div>
        <div className='search'>
          <input onChange={searchFood} type="text" placeholder='Search Food... '/>
        </div>
      </TopSection>
      <FilterContainer>
        {fitlerData.map((value)=>  <Btn 
        isSelected = {selectedBtn === value.type }
        key={value.name} onClick={()=>{filterFood(value.type)}}>{value.name}</Btn>)}
      </FilterContainer>
    </Container>
      <SearchResults data={fileterData}/>
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
  height: 140px;
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

      &::placeholder{
        color: white;

      }
    }
  }

  @media (0 < width < 600px){
    flex-direction: column;
    height: 120px;
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
  background: ${({isSelected})=>(isSelected ? "green":"#ff4343")};
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover{
    background-color:#f22f2f ;
  }
`;

