import '../Styles/About.css'
const About = () => {
    return (
        <div className="about">
             <h1>ABOUT <span>ME</span></h1>
               <div className="flex">
                    <section className="content">
                        <h2>INFORMATION ABOUT ME</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, vero eos vel nemo eius voluptatem dicta tenetur modi.</p>
                        <p>La musica delectus dolore fugiat exercitationem a, ipsum quidem quo enim natus accusamus labore dolores nam. Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non necessitatibus deleniti eum soluta.</p>
                    </section>
                    <ul className="cards">
                        <div>
                            <li>
                                <p className='big-text'>30+</p>
                                <p className='small-text'>HAPPY <br /> CLIENT</p>
                            </li>
                            <li>
                                <p className='big-text'>20+</p>
                                <p className='small-text'>PROJECTS <br /> COMPLETED</p>
                            </li>
                        </div>
                        <div>
                            <li>
                                <p className='big-text'>1+</p>
                                <p className='small-text'>YEARS OF <br /> EXPERIENCE</p>
                            </li>
                            <li>
                                <p className='big-text'>100+</p>
                                <p className='small-text'>CUSTOMER <br /> REVIEWS</p>
                            </li>
                        </div>
                    </ul>
               </div>
                <section className="skills">
                    <h2>MY SKILLS</h2>
                    <div className="container">
                        <ul>
                           <li>HTML</li>
                           <progress min ="0" max="100" value="80" />
                           <li>JS</li>
                           <progress min ="0" max="100" value="70" />
                           <li>Node</li> 
                           <progress min ="0" max="100" value="2" />
                        </ul>
                        <ul>
                            <li>React</li>
                            <progress min ="0" max="100" value="50" />
                            <li>Python</li>
                            <progress min ="0" max="100" value="2" />
                            <li>CSS3</li>
                            <progress min ="0" max="100" value="50" />
                        </ul>
                    </div>
                </section>
                <section className="timeline">
                    <h2>MY TIME LINE</h2>
                </section>
        </div>
    );
}
 
export default About;