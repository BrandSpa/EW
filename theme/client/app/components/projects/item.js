import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    const { project } = this.props;

    return (
      <div className="project">
        <div 
          className="project__header" 
          style={{backgroundImage: `url(${project.thumb})`}}
        >
        </div>

        <div className="project__content">
          <span className="title">{project.name}</span>
          <span className="country">{project.country}</span>
          <span className="state-city">{project.state} · {project.city}</span>
        </div>

        <style jsx>{`

          .project {
            transition: transform .1s ease-in-out;
            position: relative;
            background: #fff;
            width: 100%;
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

          .project__content {
            padding: 20px;
            color: #1E9CC0;
          }
          .project__content span {
            display: block;
          }

          .title {
            font-size: 19px;
            color: #5D5D5D;
            margin-bottom: 30px;
          }

          .country, .state-city {
            font-size: 15px;
            color: #039ED8;
          }

         
        `}</style>
      </div>
    )
  }
}

export default ProjectItem;
