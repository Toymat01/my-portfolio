import '../Styles/Blogs.css'

const Blogs = () => {
    return (
        <div className="blogs">
            <header>
                <h1>MY <span>BLOGS</span></h1>
            </header>
            <div className="containers">
                    <div className="cards-container">
                        <div className="img-one"></div>
                        <h3>How to Create Your Own Website</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
                <div className="cards-container">
                        <div className="img-two"></div>
                        <h3>How to Become an expert in Web Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
                <div className="cards-container">
                        <div className="img-three"></div>     
                        <h3>Become a Beginner in 10 Days</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
                <div className="cards-container">
                        <div className="img-one"></div>
                        <h3>Debbuging Made easy with Web Inspector</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
                <div className="cards-container">
                        <div className="img-two"></div>
                        <h3>This is what you need to know about Web Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
                <div className="cards-container">
                        <div className="img-three"></div>
                        <h3>Get started with Web Design and UI Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vero optio </p>
                </div>
            </div>
        </div>
    );
}
 
export default Blogs;