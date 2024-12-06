
import './App.css'
import NavBar from './components/NavBar'
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io"
import {RiEditCircleLine} from "react-icons/ri"
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';

function App() {
  const [contacts,SetContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  
  const onOpen = ()=>{
    setOpen(true);
  }
  const onClose = ()=>{
    setOpen(false);
  }


  useEffect(()=>{
    const getContacts = async() =>{
      try {
        const contactsRef = collection(db,"contact");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),
          }
          
        });
        SetContacts(contactList);
        
      } catch (error) {
        console.log(error)
      }
    };

    getContacts();
  },[]);

 

  return (
    <>
      <div className=' mx-auto max-w-[370px] px-4'>
       <NavBar/>
       <div className='flex gap-2 '>
         <div className='flex flex-grow realative items-center'>
          <input type="text"  className='bg-transparent border-white border rounded-md h-10 flex-grow text-white pl-9'/>
          <FaSearch className='text-white  text-3xl absolute ml-1' />
      
         </div>
         <div>
          <AiFillPlusCircle className='text-5xl text-white cursor-pointer '  onClick={onOpen} />
          </div>
       </div>
       <div className=' mt-4 gap-4 flex flex-col'>
        {contacts.map(contact =>(
         <ContactCard key={contact.id} contact={contact}/>
        ))}
       </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>

        hello
      </Modal>
    </>
  )
}

export default App
