import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    const { project } = this.props;

    return (
      <div className="project">
        <div className="project__header" style={{backgroundImage: `url(${project.thumb})`}}>
          <ul className="project__header__brands">
            {project.brands.map((brand, i) =>
              <li key={i}>{brand}</li>
            )}
          </ul>

          <ul className="project__header__products">
            {project.products.map((product, i) =>
              <li key={i}>{product}</li>
            )}
          </ul>
        </div>

        <div className="project__content">
          <h3>{project.post_title}</h3>
          <h4>{project.country} - {project.city}</h4>
        </div>

        <style jsx>{`

          .project {
            transition: all .2s ease-in-out;
            position: relative;
            background: #fff;
          }

          .project:hover {
            transform: scale(1.050);
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
            padding: 40px;
            text-align: center;
            color: #1E9CC0;
          }
        `}</style>
      </div>
    )
  }
}

export default ProjectItem;
