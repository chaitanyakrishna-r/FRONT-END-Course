import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion';

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState([]);
    const [searchParams, setSearchParams] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [filterData, setFilterData] = useState([])

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        console.log(query)
        setSearchParams(query);
        console.log(query);

        if(query.length > 1){
            const filteredData = userData && userData.length 
            ? userData.filter((item)=>item.toLowerCase().indexOf(query) > -1)
            :[]
            setFilterData(filteredData);
            setShowDropDown(true);
        }else{
            setShowDropDown(false);
        }
        
    }
    function handleClick(event){
        console.log(event.target.innerText);
        const userName = event.target.innerText;
        setSearchParams(userName);
        setShowDropDown(false);
        setFilterData([]);
    }


    async function fetchUsersData(){
        setLoading(true);
        try{
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            
            if(data && data.users && data.users.length){
                setUserData(data.users.map((user) => user.firstName))
            }
            
        }
        catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
        
    }
    useEffect(()=>{
        fetchUsersData();
    },[])

    console.log(userData,filterData)
    if(error){
        return <h1>error</h1>
    }
  return (
    <div>
        {
            loading 
            ? <h1>Data is processing please wait...</h1> 
            :
            <input 
            type="text"
            onChange={handleChange}
            value = {searchParams}
            placeholder='Search UserName...'
            />
        }
        {
            showDropDown 
            ? <Suggestion filteredData={filterData} handleClick={handleClick}/> 
            : null
        }


    </div>
  )
}

export default SearchAutoComplete