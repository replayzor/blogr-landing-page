// react imports
import { useState } from "react";

// data
import navList from "../data/navlist.json";

// components
import Button from "./Button";
import SidebarMenuButton from "./SidebarMenuButton";

// Header component
function Header() {
	// State variables
	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
	const [showSidebarMenu, setShowSidebarMenu] = useState(false);

	// Event handlers
	const handleSidebarMenu = () => {
		setShowSidebarMenu(!showSidebarMenu);
	};

	const handleDropdown = (index: number) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	// Render desktop menu items
	const desktopMenuItems = navList.map((item) => {
		const { heading, items, id } = item;
		const active = activeDropdown === id;

		return (
			<li key={id} className="hidden md:block">
				<nav className="relative">
					<button
						onClick={() => handleDropdown(id)}
						className="flex items-baseline gap-2 text-white hover:text-neutral-grayishBlue hover:underline font-overpass"
					>
						{heading}
						<img
							src="/images/icon-arrow-light.svg"
							alt=""
							className={`${
								active ? "rotate-180" : ""
							} duration-300 ease-in-out`}
						/>
					</button>
					{activeDropdown === id && (
						<ul className="absolute px-10 py-4 bg-white rounded-md shadow-lg font-ubuntu top-10">
							{items.map((item, index) => (
								<li
									key={index}
									className="mb-4 cursor-pointer hover:text-neutral-veryDarkBlackBlue hover:font-semibold"
								>
									{item}
								</li>
							))}
						</ul>
					)}
				</nav>
			</li>
		);
	});

	// Render header section
	return (
		<header className="bg-gradient-to-b px-8 pt-14 from-gradient-veryLightRed rounded-bl-[7.5rem] to-gradient-lightRed">
			<div className="flex items-center justify-between md:px-20 ">
				<img src="/images/logo.svg" alt="Logo of the website" />
				<div className="ml-auto md:hidden">
					<button onClick={handleSidebarMenu} type="button">
						{showSidebarMenu ? (
							<img
								src="/images/icon-close.svg"
								alt="Close icon for the sidebar menu"
								className="md:hidden"
							/>
						) : (
							<img
								src="/images/icon-hamburger.svg"
								alt="Hamburger icon for the sidebar menu"
								className="md:hidden"
							/>
						)}
					</button>
				</div>
				<div className="md:ml-12 md:flex-grow md:items-baseline md:flex md:justify-between md:gap-10">
					<div className="flex-grow md:flex md:gap-10">{desktopMenuItems}</div>
					<div className="items-center hidden font-overpass md:flex md:gap-6">
						<Button variant="transparent">Login</Button>
						<Button variant="secondary" isRounded>
							Sign up
						</Button>
					</div>
				</div>
				<SidebarMenuButton
					showSidebar={showSidebarMenu}
					setActiveDropdown={setActiveDropdown}
					activeDropdown={activeDropdown}
				/>
			</div>
			<h1 className="text-center md:text-5xl pt-32 text-white font-ubuntu text-[35px] leading-[50px]">
				A modern publishing platform
			</h1>
			<p className="pt-4 text-lg text-center text-neutral-grayishBlue font-ubuntu">
				Grow your audience and build your online brand
			</p>
			<div className="flex items-center justify-center gap-4 pt-10 pb-40 mx-auto">
				<Button variant="secondary" isRounded>
					Start for Free
				</Button>
				<Button variant="primary" isRounded>
					Learn More
				</Button>
			</div>
		</header>
	);
}

export default Header;
