import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ContactForm = () => {

  const [name,setName] = useState('');
  const [eMail,setEmail] = useState('');
  const [text,setText] = useState('');

  function onSubmit (event){
    event.preventDefault();
     setName (event.target[0].value);
     setEmail (event.target[1].value);
     setText (event.target[2].value);
    //  event.target[0].value='';
    event.target.reset();
  }


  return (
    <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button  text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />}></Button>
            <Button  text="VIA CALL" icons={<FaPhoneAlt fontSize="24px"/>}></Button>
          </div>

            
            <Button isOutline={true} text="VIA EMAIL FORM" icons={<HiMail fontSize="24px"/>}></Button>
            <form action="" onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'  />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea  name='text' rows={8} />
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>
                <Button  text="SUBMIT" ></Button>
              </div>
              
              {/* <div>{`${name} ${eMail} ${text}`}</div> */}
              <div>
                {name && <p><strong>Name:</strong> {name}</p>}
                {eMail && <p><strong>Email:</strong> {eMail}</p>}
                {text && <p><strong>Message:</strong> {text}</p>}
              </div>
            </form>
           
        </div>
        <div className={styles.contact_image}>
          <img src="../image.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm