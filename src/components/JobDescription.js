import React from 'react';
import './JobDescription.css';

const JobDescription = ({ job: { logo, company, isNew, featured, position, postedAt, contract, location } }) => {
	return (
		<div className='job-description-container'>
			<img src={logo} alt={company} className='company-logo' />
			<div className='company-role-info'>
				<div className='name-and-labels'>
					<h3 className='company-name'>{company}</h3>
					{isNew ? <label className='label-new'>New</label> : null}
					{featured ? <label className='label-featured'>Featured</label> : null}
				</div>
				<div className='job-description-info'>
					<h2 className='job-position'>{position}</h2>
					<div className='job-info'>
						<p>{postedAt}</p>
						<span className='middle-dot'>&middot;</span>
						<p>{contract}</p>
						<span className='middle-dot'>&middot;</span>
						<p>{location}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobDescription;