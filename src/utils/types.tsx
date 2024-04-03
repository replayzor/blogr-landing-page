export type SidebarProps = {
	showSidebar: boolean;
	setActiveDropdown: (id: number | null) => void;
	activeDropdown: number | null;
};

export type ButtonProps = {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "transparent" | "login" | "signUp";
	isRounded?: boolean;
};
