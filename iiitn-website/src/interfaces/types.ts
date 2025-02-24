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

export type Card = {
	c_id: string;
	title: string;
	caption: string;
	content: string;
	location: string;
	c_category: string;
	c_sub_category: string;
	date: Date;
	media_img_id: number;
	media_vid_id: number;
	media_doc_id: number;
	updated_by: number;
	added_by: number;
	media?: FileList;
};
