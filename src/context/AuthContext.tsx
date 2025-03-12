/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
	token: string | null;
	refreshToken: string | null;
	login: (user: any, access_token: string, refresh_token: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [refreshToken, setRefreshToken] = useState<string | null>(null);

	useEffect(() => {
		console.log("Auth User", user);
	}, [user]);

	const login = (user: User, access_token: string, refresh_token: string) => {
		localStorage.setItem("access_token", access_token); // ! Use secure Cookies in production
		localStorage.setItem("refresh_token", refresh_token); // ! Use secure Cookies in production
		setUser(user);
		setToken(access_token);
		setRefreshToken(refreshToken);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		setRefreshToken(null);
	};

	return (
		<AuthContext.Provider value={{ user, token, refreshToken, login, logout }}>
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
