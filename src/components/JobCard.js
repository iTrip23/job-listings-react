import React from 'react';
import './JobCard.css';
import JobDescription from './JobDescription.js';
import JobRequirements from './JobRequirements.js';

const JobCard = ({ job }) => {
	return (
		<section className='job-card'>
			<JobDescription job={job} />
			<JobRequirements job={job} />
		</section>
	)
}

export default JobCard;