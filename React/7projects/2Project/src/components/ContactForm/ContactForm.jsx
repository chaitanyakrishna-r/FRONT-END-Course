import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'

const ContactForm = () => {
    console.log(styles)
  return (
    <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
            <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />}></Button>
            <Button text="VIA CALL" icons={<MdMessage fontSize="24px"/>}></Button>
        </div>
        <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm