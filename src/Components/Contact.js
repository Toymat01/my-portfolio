import { useState } from 'react';
import '../Styles/Contact.css'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
 

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert('message sent')
    }

    return (
        <div className="contact">
           <header>
            <h1>CONTACT <span>ME</span></h1>
            <h2>CONTACT ME HERE</h2>
            <p>Kindly reach out to me at any of the addresses below.</p>
           </header>
           <div className="address">
              <div>
                <p>Location</p>
                <p>:Akure, Nigeria</p>
              </div>
              <div>
                <p>Email</p>
                <p>:Toyymat@gmail.com</p>
              </div>
              <div>
                  <p>Mobile Number</p>
                  <p>:08121929737</p>
              </div>
           </div>
            <div className="socials">
               <a href='https://github.com/Toymat01'>LinkedIn</a>
               <a href="https://github.com/Toymat01">Github</a>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='YOUR NAME' value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder='YOUR EMAIL' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder='ENTER SUBJECT' value={subject}  onChange={e => setSubject(e.target.value)} />
                <textarea  placeholder='message here...' value={message} onChange={e => setMessage(e.target.value)}/>
                <button>Send Message</button>
            </form>
        </div>
    );
}
 
export default Contact;