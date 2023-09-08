import { FaPhone } from 'react-icons/fa';
import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("sanjay");
    const [email, setEmail] = useState("sanjayrawat@gmail.com");
    const [text, setText] = useState("Coding is slowy slowly going in my blood");


    const onSubmit = (event) => {
        event.preventDefault();



        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
    };

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text=" VIA CALL" icon={<FaPhone fontSize="23px" />} />
                </div>

                <Button isOutline={true}
                    text=" VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
                <form
                    onSubmit={onSubmit} >
                    <div className={styles.form_control}>
                        <label htmlFor="name" >Name</label>
                        <input type=" text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text" >Text</label>
                        <textarea name="email" rows="8" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}>
                        <Button text="SUBMITT BUTTON" />
                    </div>
                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/service.svg" alt="contact image" />
            </div>
        </section>
    );
};

export default ContactForm;