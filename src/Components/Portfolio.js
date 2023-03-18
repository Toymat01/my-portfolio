import "../Styles/Portfolio.css";

const Portfolio = () => {
	const imgs = [
		{ src: "/img/port1.jpg", id: "port1", title: "Todo-App", ref: "/" },
		{ src: "/img/port2.jpg", id: "port2", title: "Calculator", ref: "/" },
		{ src: "/img/port3.jpg", id: "port3", title: "Memory Game", ref: "/" },
		{ src: "/img/port4.jpg", id: "port4", title: "Color Changer", ref: "/" },
		{ src: "/img/port5.jpg", id: "port5", title: "QR Generator", ref: "/" },
		{
			src: "/img/weather.png",
			id: "port6",
			title: "Weather App",
			ref: "https://twweather.netlify.app",
		},
		{
			src: "/img/cineroom.jpeg",
			id: "port7",
			title: "Cineroom",
			ref: "http://cineroom.vercel.app",
		},
	];

	return (
		<div className="portfolio">
			<header>
				<h1>
					MY <span>PORTFOLIO</span>
				</h1>
				<p>
					Here is some of my work that I've done in various programming
					languages.
				</p>
			</header>
			<section>
				{imgs.map((img) => (
					<div className="img" key={img.id}>
						<img src={img.src} alt={img.id} />
						<a href={img.ref}>
							<h3>{img.title}</h3>
						</a>
					</div>
				))}
			</section>
		</div>
	);
};

export default Portfolio;
