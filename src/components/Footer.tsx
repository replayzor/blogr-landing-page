// data
import navList from "../data/navlist.json";

function Footer() {
	const footerMenuItems = navList.map((item) => {
		const { id, heading, items } = item;

		return (
			<div key={id}>
				<h3 className="pt-6 text-lg font-bold text-white font-ubuntu">
					{heading}
				</h3>
				<ul className="pt-6 space-y-1 text-lg md:gap-2 md:flex md:flex-col text-neutral-grayishBlue">
					{items.map((item) => {
						return (
							<li
								key={crypto.randomUUID()}
								className="hover:decoration-white hover:cursor-pointer hover:underline"
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return (
		<>
			<footer className="md:items-start flex md:flex-row md:justify-start flex-col pb-20 rounded-tr-[100px] items-center mt-20 text-center bg-gradient-veryDarkGrayBlue">
				<img src="/images/logo.svg" className="p-20" alt="" />
				<div className="md:flex md:mt-12 md:flex-row md:mx-auto md:gap-44 md:items-baseline">
					{footerMenuItems}
				</div>
			</footer>

			<div className="text-[11px] text-center">
				Challenge by{" "}
				<a
					className="text-blue-600"
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					className="text-blue-600"
					href="https://github.com/replayzor/"
					target="_blank"
				>
					Ionut Oltean
				</a>
				.
			</div>
		</>
	);
}
export default Footer;
