
import './App.css'
import NavBar from './components/NavBar'
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io"
import {RiEditCircleLine} from "react-icons/ri"
import { useEffect, useState } from 'react';
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import NotFound from './components/NotFound';

function App() {
  const [contacts,SetContacts] = useState([]);
  
  const {isOpen, onClose, onOpen}= useDisclouse();


  useEffect(()=>{
    const getContacts = async() =>{
      try {
        const contactsRef = collection(db,"contact");
       
        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc)=>{
            return{
              id:doc.id,
              ...doc.data(),
            }
            
          });
          SetContacts(contactList);
          return contactList;
        })
   
        
      } catch (error) {
        console.log(error)
      }
    };

    getContacts();
  },[]);

  const filterContact = (e)=>{
    const value = e.target.value;
    const contactsRef = collection(db,"contact");
       
    onSnapshot(contactsRef,(snapshot)=>{
      const contactList = snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data(),
        }
        
      });
     

      const filteredContacts = contactList.filter(contact =>contact.Name?.toLowerCase().includes(value.toLowerCase()))

      SetContacts(filteredContacts);

      return contactList;
    })
  }
 

  return (
    <>
      <div className=' mx-auto max-w-[370px] px-4'>
       <NavBar/>
       <div className='flex gap-2 '>
         <div className='flex flex-grow realative items-center'>
          <input onChange={filterContact} type="text"  className='bg-transparent border-white border rounded-md h-10 flex-grow text-white pl-9'/>
          <FaSearch className='text-white  text-3xl absolute ml-1' />
      
         </div>
         <div>
          <AiFillPlusCircle className='text-5xl text-white cursor-pointer '  onClick={onOpen} />
          </div>
       </div>
       <div className=' mt-4 gap-4 flex flex-col'>
        {contacts.length <= 0 ? <NotFound/> : contacts.map(contact =>(
         <ContactCard key={contact.id} contact={contact}/>
        ))}
       </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
      <ToastContainer position='bottom-center'  />  
      
    </>
   )
}

export default App
