
import '../Styles/Home.css'

const Home = () => {

    const imgs = [
        {"src":'/img/Accept.svg', "id":"port1", "title":"Todo-App"},
        {"src":'/img/Data.svg', "id":"port2", "title":"Calculator"},
        {"src":'/img/Development.svg', "id":"port3", "title":"Memory Game"},
        {"src":'/img/Online.svg', "id":"port4", "title":"Color Changer"},
        {"src":'/img/Programming.svg', "id":"port5", "title":"QR Generator"},
        {"src":'/img/Revenue.svg', "id":"port6", "title":"Weather App"},
        {"src":'/img/Site.svg', "id":"port7", "title":"FinTech App"}
    ]
    return (
            <div className="home">
                <header className="home">
                    <h1>Hi, I'm <span>Adeyemi Toheeb</span>.<br/> A Web Developer.</h1>
                    <p>I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </header>
                <div className="svg">
                    {imgs.map(img => (
                        <div className="svgs">
                            <img src={img.src} alt={img.id} />
                        </div>
                    ))}
                </div>
            </div>

    );
}
 
export default Home;