import React from 'react';

const ProjectItem = ({ project }) => (

	<a href={project.url.replace('#038;', '&')} className="project">
		<div
			className="project__header"
			style={{ backgroundImage: `url(${project.thumb})` }}
		/>

		<div className="project__info">
			<span className="project__info-date">{project.month} {project.year}</span>
			<div className="miniline" />
			<span className="project__info-title">{project.name}</span>
			<span className="project__info-country">{project.country}</span>
			<span className="project__info-state-city">{project.state} · {project.city}</span>
		</div>

		<style jsx>{`
          .project {
            display: block;
            transition: transform .1s ease-in-out;
            position: relative;
            background: #fff;
            width: 100%;
          }

          .miniline {
            width: 15px;
            height: 1px;
            background: #039ED8;
            margin: 10px 0;
          }

          .project:hover {
            transform: scale(1.150);
            z-index: 2;
            box-shadow: 0 0 20px rgba(0,0,0,.1)
          }

          .project__header {
            width: 100%;
            height: 200px;
            background-position: center;
            background-size: cover;
          }

          .project__info {
            padding: 20px;
            color: #1E9CC0;
          }
          .project__info span {
            display: block;
          }

          .project__info-title {
            font-size: 19px;
            color: #5D5D5D;
            margin-bottom: 30px;
          }

          .project__info-country, .project__info-state-city {
            font-size: 15px;
            color: #039ED8;
          }


        `}
		</style>
	</a>
);

export default ProjectItem;
