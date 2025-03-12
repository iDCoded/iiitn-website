/* eslint-disable react-refresh/only-export-components */
import { User } from "@/interfaces/types";
import {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect,
} from "react";

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	loading: boolean;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	function getCookie(name: string): string {
		const match = document.cookie.match(
			new RegExp("(^| )" + name + "=([^;]+)")
		);
		return match ? match[2] : "";
	}

	// Function to refresh the access token
	const refreshAccessToken = async () => {
		try {
			const res = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
				{
					method: "POST",
					credentials: "include",
					headers: {
						"X-CSRF-TOKEN": getCookie("csrf_refresh_token"),
					},
				}
			);
			if (res.ok) {
				const data = await res.json();
				setUser(data.user);
				return true;
			}
		} catch {
			setUser(null);
		}
		return false;
	};

	// Fetch user on mount & attempt refresh if needed
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/auth/user`,
					{ credentials: "include" }
				);
				if (res.ok) {
					const data = await res.json();
					setUser(data.user);
				} else {
					await refreshAccessToken();
				}
			} catch {
				setUser(null);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const login = async (email: string, password: string): Promise<boolean> => {
		const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include", // Ensures cookies are sent/received
			body: JSON.stringify({ email, password }),
		});

		if (res.ok) {
			const data = await res.json();
			setUser(data.user); // Only store the user, JWT is in cookies
			return true;
		}
		return false;
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
