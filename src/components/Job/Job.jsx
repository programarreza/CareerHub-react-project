import { MdLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
	const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = job;
	return (
		<div>
			<div className="card card-compact bg-base-100 shadow-xl">
				<img className="w-24 ml-5" src={logo} alt="" />
				<div className="card-body">
					<h2>{job_title}</h2>
					<p>{company_name}</p>

					<div>
						<button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
						<button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
					</div>

					<div className="flex ">
						<h2 className="flex items-center mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
						<h2 className="flex items-center"><RiMoneyDollarCircleLine className="text-2xl mr-2"></RiMoneyDollarCircleLine>{salary}</h2>
					</div>

					<Link to={`/job/${id}`}><button className="py-2 rounded-lg font-semibold btn-primary w-32">View Details</button></Link>
				</div>
			</div>
		</div>
	);
};

export default Job;