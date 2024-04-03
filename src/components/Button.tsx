// types
import { ButtonProps } from "../utils/types";

const variantClasses = {
	primary:
		"bg-transparent outline hover:text-primary-veryLightRed hover:bg-white outline-white outline-offset-0 text-white hover:bg-primary-veryLightRed",
	secondary:
		"bg-white text-primary-lightRed hover:bg-primary-veryLightRed hover:text-white",
	transparent: "bg-transparent text-white",
	login: "text-gray-600",
	signUp:
		"rounded-full bg-gradient-to-r from-red-300 to-red-400 text-white px-7",
};

function Button({
	children,
	variant = "primary",
	isRounded = false,
}: ButtonProps) {
	const baseClasses =
		"px-4 py-2 font-bold transition-colors duration-300 ease-in";

	const roundedClasses = isRounded ? "rounded-full" : "";

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]} ${roundedClasses}`}
		>
			{children}
		</button>
	);
}

export default Button;
