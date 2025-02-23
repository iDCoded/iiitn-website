export interface Person {
	name: string;
	email: string;
	phone?: string;
	imageUrl?: string;
	department: string;
}

export interface Faculty {
	f_id: number;
	p_id: number;
	d_id: number;
	join_year: number;
	positions: string;
	f_or_s: "Faculty" | "Staff";
	person: Person;
}
