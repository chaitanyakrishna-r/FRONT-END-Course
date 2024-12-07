import React from 'react'
import Modal from './Modal'
import {ErrorMessage, Field, Form, Formik} from "formik"
import {db} from "../config/firebase"
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape(
{Name:Yup.string().required("**Name is Required"),
email:Yup.string().email("Invalid Email").required("*email is Required")
});

const AddAndUpdateContact = ({isOpen, onClose, isUpate, contact}) => {
    const addContact = async(contact) => {
        try{
            const contactRef = collection(db,"contact");
            await addDoc(contactRef, contact );
            onClose();
            toast.success("Contact Added Successfully");
        }
        catch(error){
            console.log(error);
        }
    };
    const updateContact = async(contact, id) => {
        try{
            const contactRef = doc(db,"contact",id);
            await updateDoc(contactRef, contact );
            onClose();
            toast.success("Contact Updated Successfully");
        }
        catch(error){
            console.log(error);
        }
    };

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose} >
        <Formik 
        validationSchema={contactSchemaValidation}
        initialValues={isUpate ?
            {
            Name:contact.Name,
            email:contact.email}
         :
            { Name:"",
            email:""}}
            onSubmit={(value)=>{
                console.log(value);
                isUpate? updateContact(value,contact.id) :  addContact(value);
            }
           }
        >
            <Form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="Name">Name</label>
                <Field name="Name" className="border h-10 " /> 
                <div className='text-red-500 text-xs '>
                    <ErrorMessage name="Name"/>
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <Field  name="email" className="border h-10 " /> 
                <div className='text-red-500 text-xs '>
                    <ErrorMessage name="email"/>
                </div>
                </div>
                <button className='bg-orange px-3 py-1.5 border self-end rounded '>{isUpate?"Update Contact": "Add Contact"}</button>

            </Form>
        </Formik>
      </Modal>
    </div>
  )
};

export default AddAndUpdateContact