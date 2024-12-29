import React, { useEffect, useState } from 'react'
import User from './User';
import './styles.css'

const UserProfile = () => {
    const [userName, setUserName] = useState('chaitanyakrishna-r');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);


    
    async function fetchGitHubProfile(){
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        if(data){
            setUserData(data);
            setLoading(false);
            setUserName('');
        }
        console.log(data);
    }
    function handlSubmit(){
        fetchGitHubProfile();
    }

    useEffect(()=>{
        fetchGitHubProfile();
    },[])

    if(loading) {
        return <h1>Data is Loading! please wait...</h1>
    }
  return (


    <div className='github-profile'>
        <div className='input-wrapper'>
            <input 
            name='search-by-username'
            type="text"
            placeholder='Search Github UserName'
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}} 
            />   
            <button onClick={handlSubmit}> Search </button>  
        </div>  
        <div>
            {userData !== null ? <User user={userData}/> : null}
        </div>    

    </div>
  )
}

export default UserProfile