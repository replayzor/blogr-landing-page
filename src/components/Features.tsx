// data
import features from "../data/content.json";

function Features() {
	const content = features.features.map((item) => {
		const { id, title, description } = item;

		return (
			<div key={id} className="md:w-full md:px-0 md:text-left">
				<h2 className="pt-14 mx-auto md:mx-0 w-[80%] text-[28px] leading-8 font-semibold text-primary-veryDarkBlue">
					{title}
				</h2>
				<p className="px-10 pt-4 leading-7 md:px-0 text-neutral-veryDarkGrayishBlue">
					{description}
				</p>
			</div>
		);
	});

	return (
		<div className="md:flex md:flex-row">
			<div>
				<img
					className="pt-12 md:hidden"
					src="/images/illustration-laptop-mobile.svg"
					alt=""
				/>
				<img
					className="hidden pt-12 md:block md:-translate-x-[270px]"
					src="/images/illustration-laptop-desktop.svg"
					alt=""
				/>
			</div>
			<div className="text-center md:-translate-x-40 md:max-w-xl md:ml-20 md:flex md:flex-col md:justify-center md:items-center">
				{content}
			</div>
		</div>
	);
}
export default Features;
