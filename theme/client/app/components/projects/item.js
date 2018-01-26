import React from 'react';

const ProjectItem = ({ project }) => (

	<a href={project.url.replace('#038;', '&')} className="project-item">
		<div
			className="project-item__header"
			style={{ backgroundImage: `url(${project.thumb})` }}
		/>

		<div className="project__info">
			<span className="project__info-date">{project.month} {project.year}</span>
			<div className="miniline" />
			<span className="project__info-title">{project.name}</span>
			<div className="project__info__bottom">
				<span className="project__info-country">{project.country}</span>
				<span className="project__info-state-city">{project.state} · {project.city}</span>
			</div>
		</div>

		<style jsx>{`
        .project-item {
            display: flex;
            flex: 1;
            transition: transform .1s ease-in-out;
            position: relative;
            background: #fff;
            width: 100%;
            margin-bottom: 20px;
          }

          .miniline {
            width: 15px;
            height: 1px;
            background: #039ED8;
            margin: 5px 0;
          }

          .project:hover {
            transform: scale(1.150);
            z-index: 2;
            box-shadow: 0 0 20px rgba(0,0,0,.1)
          }

          .project-item__header {
            width: 40%;
            min-height: 140px;
            background-position: center;
            background-size: cover;
            position: relative
          }


          .project__info {
            padding: 10px 20px;
            color: #1E9CC0;
            width: 70%;
            position: relative;
          }

          .project__info__bottom {
            position: absolute;
            bottom: 10px;
          }

          .project__info span {
            display: block;
          }

          .project__info-title {
            font-size: 15px;
            color: #5D5D5D;
            margin-bottom: 10px;
          }

          .project__info-date {
            font-size: 13px;
          }

          .project__info-country, .project__info-state-city {
            font-size: 13px;
            color: #039ED8;
          }

          @media (min-width: 1024px) {
            .project-item {
              display: block;
              margin-bottom: 2px;
            }

            .project-item__header {
              height: 200px;
              width: 100%;
            }

            .project__info {
              height: 200px;
              padding: 20px;
              width: 100%;
            }

            .project__info__bottom {
              position: absolute;
              bottom: 20px;
            }

            .project__info-title {
              font-size: 19px;
              margin-bottom: 30px;
              width: 100%;
            }

            .miniline {
              margin: 10px 0;
            }

            .project__info-date {
              font-size: 15px;
            }

            .project__info-country, .project__info-state-city {
              font-size: 15px;
            }

          }


        `}
		</style>
	</a>
);

export default ProjectItem;
