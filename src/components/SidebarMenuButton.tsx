// data
import navList from "../data/navlist.json";

// library imports
import { useMediaQuery } from "react-responsive";

// components
import Button from "./Button";

// types
import { SidebarProps } from "../utils/types";

function SidebarMenuButton({
	showSidebar,
	setActiveDropdown,
	activeDropdown,
}: SidebarProps) {
	const isDesktop = useMediaQuery({ query: "(min-width: 766px)" });

	if (isDesktop) {
		return null;
	}

	const handleDropdown = (index: number) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	return (
		<>
			{showSidebar && (
				<nav className="fixed z-10 rounded-lg shadow-lg bg-white w-[50%] min-w-[200px] top-32 left-[30%] py-6">
					{navList.map((item) => {
						const { heading, items, id } = item;
						const active = activeDropdown === id;
						return (
							<div
								key={id}
								className="flex flex-col items-center justify-center mb-2"
							>
								<button
									onClick={() => handleDropdown(id)}
									className="text-neutral-veryDarkBlackBlue focus:text-red-500 flex items-baseline gap-2 font-semibold font-overpass text-sm leading-[30px]"
								>
									{heading}
									<img
										src="/images/icon-arrow-dark.svg"
										alt=""
										className={` ${
											active ? "rotate-180" : ""
										} duration-300 ease-in-out`}
									/>
								</button>
								{activeDropdown === id && (
									<ul className="px-10 py-4 bg-gray-100 rounded-md w-[90%] flex flex-col mt-4 items-center font-ubuntu">
										{items.map((item, index) => (
											<li
												key={index}
												className="mb-4 cursor-pointer hover:text-red-500 hover:font-semibold"
											>
												{item}
											</li>
										))}
									</ul>
								)}
							</div>
						);
					})}
					<div className="m-auto w-[90%] mt-6 border border-gray-400"></div>
					<div className="flex flex-col items-center justify-center gap-4 m-auto mt-8">
						<Button variant="login">Login</Button>
						<Button variant="signUp">Sign Up</Button>
					</div>
				</nav>
			)}
		</>
	);
}
export default SidebarMenuButton;
