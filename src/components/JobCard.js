import React from 'react';
import './JobCard.css';
import JobDescription from './JobDescription.js';
import JobRequirements from './JobRequirements.js';

const JobCard = ({ job, pushFilterElem }) => {
	const filter = [];
	filter.push(job.role)
	filter.push(job.level)
	filter.push(...job.languages)
	filter.push(...job.tools)
	job.tags = filter;
	return (
		<section className={job.featured ? 'border-left job-card' : 'job-card'}>
			<JobDescription job={job} />
			<JobRequirements job={job} pushFilterElem={pushFilterElem} />
		</section>
	)
}

export default JobCard;