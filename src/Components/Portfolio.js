 
import  "../Styles/Portfolio.css"

const Portfolio = () => {

    
  


    const imgs = [
        {"src":'/img/port1.jpg', "id":"port1", "title":"Todo-App", },
        {"src":'/img/port2.jpg', "id":"port2", "title":"Calculator"},
        {"src":'/img/port3.jpg', "id":"port3", "title":"Memory Game"},
        {"src":'/img/port4.jpg', "id":"port4", "title":"Color Changer"},
        {"src":'/img/port5.jpg', "id":"port5", "title":"QR Generator"},
        {"src":'/img/port7.jpg', "id":"port6", "title":"Weather App"},
        {"src":'/img/port7.jpg', "id":"port7", "title":"FinTech App"}
    ]

    return (
        <div className="portfolio">
            <header>
                <h1>MY <span>PORTFOLIO</span></h1>
                <p>Here is some of my work that I've done in various programming languages.</p>
            </header>
            <section>
                {imgs.map(img =>(
                    <div className="img" key={img.id}>
                        <img src={img.src} alt={img.id}  />
                        <h3>Project Source</h3>
                    </div>
                ))}
            </section>
        </div>
    );
}
 
export default Portfolio;