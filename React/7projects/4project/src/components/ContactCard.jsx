import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import { deleteDoc ,doc } from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {
  const deleteContact = async(id) =>{
    try {
      await deleteDoc(doc(db,"contact",id))
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  const {isOpen, onClose, onOpen}= useDisclouse();

  return (
    <>
      <div key={contact.id}
          className='bg-yellow text-black flex items-center justify-between p-2 rounded-lg'>
            <div className='flex gap-1'>
              <HiOutlineUserCircle className='text-orange text-4xl'/>
              <div className=''>
                <h2 className='font-medium '>{contact.Name}</h2>
                <p className='text-sm '>{contact.email}</p>
              </div>
            </div>
            <div className='flex text-3xl'>
              <RiEditCircleLine onClick={onOpen} className='cursor-pointer '/>
              <IoMdTrash onClick={()=>{
                deleteContact(contact.id)
                console.log(("clik"))}
            } className='text-orange '></IoMdTrash>
            </div>
          </div>
            <AddAndUpdateContact isUpate isOpen={isOpen} onClose={onClose} contact={contact}/>
    </>
  )
}

export default ContactCard