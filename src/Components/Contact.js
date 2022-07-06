import '../Styles/Contact.css'

const Contact = () => {
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
                <p>:Toyheemat01@gmail.com</p>
              </div>
              <div>
                  <p>Education</p>
                  <p>:Federal university of Technology, Akure</p>
              </div>
              <div>
                  <p>Mobile Number</p>
                  <p>:08121929737</p>
              </div>
           </div>
            <div className="socials">
                <a href="http://facebook.com/toheebseun">facebook</a>
                <a href="http://www.twitter.com/toymat"> twitter</a>
                <a href="http://www.instagram.com/thegadgetsbro">instagram</a>
                <a href="/k">snapchat</a>
            </div>
            <form >
                <input type="text" placeholder='YOUR NAME' />
                <input type="text" placeholder='YOUR EMAIL' />
                <input type="text" placeholder='ENTER SUBJECT' />
                <textarea  placeholder='message here...'/>
            </form>
            <button>Download CV</button>

        </div>
    );
}
 
export default Contact;