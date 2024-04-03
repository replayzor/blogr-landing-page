// components
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
	return (
		<main className="">
			<Header />

			<section className="flex flex-col items-center justify-center md:overflow-hidden">
				<Title />
				<About />
			</section>

			<section className="relative pt-20 md:-translate-y-32">
				<img
					className="absolute md:top-40"
					src="/images/illustration-phones.svg"
					alt=""
				/>
				<div className="flex pt-56 text-center md:text-left md:pt-32 flex-col md:pl-[600px] md:items-start items-center justify-center rounded-bl-[90px] mt-48  rounded-tr-[90px] bg-gradient-veryDarkDesaturatedBlue">
					<h2 className="text-4xl text-white font-overpass">
						State of the Art Infrastructure
					</h2>
					<p className="w-[80%] md:w-[60%] pt-6 text-neutral-grayishBlue leading-7 pb-28">
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</p>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center md:overflow-hidden">
				<Features />
			</section>

			<Footer />
		</main>
	);
}

export default App;
