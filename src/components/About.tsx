// data
import about from "../data/content.json";

function About() {
	const content = about.about.map((item) => {
		const { id, title, description } = item;
		return (
			<div key={id}>
				<div className="md:w-full md:px-0 md:text-left">
					<h2 className="pt-14 mx-auto md:mx-0 w-[80%] text-[28px] leading-8 font-semibold text-primary-veryDarkBlue">
						{title}
					</h2>
					<p className="px-10 pt-4 leading-7 md:px-0 text-neutral-veryDarkGrayishBlue">
						{description}
					</p>
				</div>
			</div>
		);
	});

	return (
		<div className="md:flex md:flex-row-reverse">
			<div>
				<img
					className="pt-12 md:hidden "
					src="/images/illustration-editor-mobile.svg"
					alt="Illustration of editor on mobile"
				/>

				<img
					className="hidden md:block md:translate-x-[230px]"
					src="/images/illustration-editor-desktop.svg"
					alt="Illustration of editor on desktop"
				/>
			</div>

			<div className="text-center md:max-w-xl md:ml-20 md:flex md:flex-col md:justify-center md:items-center">
				{content}
			</div>
		</div>
	);
}
export default About;
