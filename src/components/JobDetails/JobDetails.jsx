import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id)
	const job = jobs.find(job => job.id === idInt);

	// const {job_description, job_responsibility, educational_requirements, experiences} = job;
	// console.log();

	const handleApplyJob = () => {
		saveJobApplication(id)
		toast('You have applied successfully.');
	}
	return (
		<div>
			<h2>This is Details id : {id}</h2>
			<div className="grid gap-4 md:grid-cols-4">
				<div className="border md:col-span-3 gap-6">
					<h3 className="mb-6"><span>Job Description :</span> {job.job_description}</h3>
					<h3 className="mb-6"><span>Job Responsibility :</span> {job.job_responsibility}</h3>
					<h3 className="mb-6"><span>Educational Requirements:</span> {job.educational_requirements}</h3>
					<h3 className="mb-6"><span>Experiences:</span> {job.experiences}</h3>
				</div>

				<div className="border">
					<h2 className="text-4xl">Side things</h2>
					<button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default JobDetails;