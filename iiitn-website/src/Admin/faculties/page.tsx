/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Faculty } from "@/interfaces/types";

function FacultyTablePage() {
	const [facultyData, setFacultyData] = useState<Faculty[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchFacultyData = async () => {
			try {
				const sampleFacultyData: Faculty[] = [
					{
						f_id: 1,
						p_id: 101,
						d_id: 10,
						join_year: 2015,
						positions: "Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Rajesh Kumar",
							email: "rajesh.kumar@example.com",
							phone: "+91-9876543210",
							imageUrl: "https://example.com/images/rajesh.jpg",
							department: "Computer Science",
						},
					},
					{
						f_id: 2,
						p_id: 102,
						d_id: 20,
						join_year: 2018,
						positions: "Assistant Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Meera Sharma",
							email: "meera.sharma@example.com",
							phone: "+91-9812345678",
							imageUrl: "https://example.com/images/meera.jpg",
							department: "Electronics",
						},
					},
					{
						f_id: 3,
						p_id: 103,
						d_id: 30,
						join_year: 2020,
						positions: "Lecturer",
						f_or_s: "Faculty",
						person: {
							name: "Prof. Amit Patel",
							email: "amit.patel@example.com",
							phone: "+91-9123456780",
							imageUrl: "https://example.com/images/amit.jpg",
							department: "Mechanical Engineering",
						},
					},
					{
						f_id: 4,
						p_id: 104,
						d_id: 40,
						join_year: 2012,
						positions: "Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Ramesh Verma",
							email: "ramesh.verma@example.com",
							phone: "+91-9012345678",
							imageUrl: "https://example.com/images/ramesh.jpg",
							department: "Civil Engineering",
						},
					},
					{
						f_id: 5,
						p_id: 105,
						d_id: 50,
						join_year: 2017,
						positions: "Senior Lecturer",
						f_or_s: "Faculty",
						person: {
							name: "Prof. Neha Joshi",
							email: "neha.joshi@example.com",
							phone: "+91-8901234567",
							imageUrl: "https://example.com/images/neha.jpg",
							department: "Information Technology",
						},
					},
					{
						f_id: 6,
						p_id: 106,
						d_id: 60,
						join_year: 2014,
						positions: "HOD",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Suresh Nair",
							email: "suresh.nair@example.com",
							phone: "+91-8765432109",
							imageUrl: "https://example.com/images/suresh.jpg",
							department: "Mathematics",
						},
					},
					{
						f_id: 7,
						p_id: 107,
						d_id: 70,
						join_year: 2019,
						positions: "Lecturer",
						f_or_s: "Faculty",
						person: {
							name: "Prof. Arjun Singh",
							email: "arjun.singh@example.com",
							phone: "+91-7654321098",
							imageUrl: "https://example.com/images/arjun.jpg",
							department: "Physics",
						},
					},
					{
						f_id: 8,
						p_id: 108,
						d_id: 80,
						join_year: 2016,
						positions: "Assistant Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Kavita Das",
							email: "kavita.das@example.com",
							phone: "+91-7543210987",
							imageUrl: "https://example.com/images/kavita.jpg",
							department: "Biotechnology",
						},
					},
					{
						f_id: 9,
						p_id: 109,
						d_id: 90,
						join_year: 2011,
						positions: "Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Vinod Malhotra",
							email: "vinod.malhotra@example.com",
							phone: "+91-7432109876",
							imageUrl: "https://example.com/images/vinod.jpg",
							department: "Electrical Engineering",
						},
					},
					{
						f_id: 10,
						p_id: 110,
						d_id: 10,
						join_year: 2021,
						positions: "Research Associate",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Priya Kapoor",
							email: "priya.kapoor@example.com",
							phone: "+91-7321098765",
							imageUrl: "https://example.com/images/priya.jpg",
							department: "Computer Science",
						},
					},
					{
						f_id: 11,
						p_id: 111,
						d_id: 20,
						join_year: 2015,
						positions: "Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Sanjay Iyer",
							email: "sanjay.iyer@example.com",
							phone: "+91-7210987654",
							imageUrl: "https://example.com/images/sanjay.jpg",
							department: "Electronics",
						},
					},
					{
						f_id: 12,
						p_id: 112,
						d_id: 30,
						join_year: 2018,
						positions: "Lecturer",
						f_or_s: "Faculty",
						person: {
							name: "Prof. Ritu Sharma",
							email: "ritu.sharma@example.com",
							phone: "+91-7109876543",
							imageUrl: "https://example.com/images/ritu.jpg",
							department: "Mechanical Engineering",
						},
					},
					{
						f_id: 13,
						p_id: 113,
						d_id: 40,
						join_year: 2013,
						positions: "Senior Professor",
						f_or_s: "Faculty",
						person: {
							name: "Dr. Mahesh Gupta",
							email: "mahesh.gupta@example.com",
							phone: "+91-7098765432",
							imageUrl: "https://example.com/images/mahesh.jpg",
							department: "Civil Engineering",
						},
					},
					{
						f_id: 14,
						p_id: 114,
						d_id: 50,
						join_year: 2017,
						positions: "Lecturer",
						f_or_s: "Faculty",
						person: {
							name: "Prof. Anjali Mehta",
							email: "anjali.mehta@example.com",
							phone: "+91-6987654321",
							imageUrl: "https://example.com/images/anjali.jpg",
							department: "Information Technology",
						},
					},
				];

				// const response = await fetch(
				// 	"http://localhost:5000/faculty/faculty_staff"
				// );
				// if (!response.ok) throw new Error("Failed to fetch faculty data");

				// const data: Faculty[] = await response.json();
				setFacultyData(sampleFacultyData);
			} catch (err: any) {
				console.error(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchFacultyData();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={facultyData} />
		</div>
	);
}

export default FacultyTablePage;
