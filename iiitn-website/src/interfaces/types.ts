export interface Person {
	p_id: number;
	email_pri: string;
	email_sec: string;
	name: string;
	phone_no: string;
	alt_phone_no: string;
	curr_address: string;
	perm_address: string;
	password: string;
	role: "admin" | "student" | "faculty";
	sm_id: string | null;
}

export interface Faculty {
	f_id: string;
	p_id: string;
	d_id: string;
	pub_id: string;
	name: string;
	email: string;
	phone_no: string;
	media_img_id: number;
	join_year: number;
	positions: string;
	education: string;
	experience: number;
	teaching: string;
	research: string;
	f_or_s: "Faculty" | "Staff";
}

export interface ICard {
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
	visibility: boolean;
}

export interface IMedia {
	m_id: number;
	m_category: string;
	m_sub_category: string;
	title: string;
	media_img_id?: number | null;
	media_vid_id?: number | null;
	media_doc_id?: number | null;
	updated_by?: number | null;
	updated_time?: Date;
	added_by?: number | null;
	added_time?: Date;
}
