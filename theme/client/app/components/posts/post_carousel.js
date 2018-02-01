import React, { Component } from 'react';

class PostSlide extends Component {

  handleClick = () => {
    setTimeout(() => {
      window.location = this.props.post.guid;
    });
  }

  render() {
    const { post, total } = this.props;
    let postWidth = `${200 / (total * 2)}%`;

    if(this.props.mobile) {
      postWidth = `${100 / total}%`;
    }

    return (
      <div className="post-slide"
        style={{width: postWidth, float: 'left'}}
        onClick={this.handleClick}
        >
        <div className="post-slide__header" style={{minHeight: '250px', backgroundImage: `url(${post.image})`}}></div>
        <div className="post-slide__content">
          <a href={post.guid}>
            <span className="post-slide__date">{post.date}</span>
            <h2 className="post-slide__title">{post.post_title}</h2>
            <p>{post.intro}</p>
          </a>
        </div>
        <style jsx>{`
          .post-slide {
            padding: 0 10px;
            transition: all .3s;
            cursor: pointer;
          }

          .post-slide__media {
            background-color: #F8F8F8;
            background-position: center;
            background-size: cover;
            min-height: 250px;
            cursor: pointer;
          }

          .post-slide__header {
            background-position: center;
            background-size: cover;
            background-color: #5D5D5D;
          }

          .post-slide__date {
            display: block;
            color: #039ED8;
            font-size: 15px;
            margin-bottom: 40px;
          }

          .post-slide__content {
            background: #FAFAFA;
            padding: 60px;
            float: left;
            width: 100%;
            transition: all .7s;
            min-height: 320px;
            position: relative;
          }

          .post-slide__content p {
            color: #5D5D5D;
            font-size: 14px;
          }

          .post-slide:hover {
            transform: scale(1.1);
          }

          .post-slide__title {
            color: #039ED8;
            margin: 0 0 40px 0;
          }

          .post-slide__excerpt {
            color: #747E86;
            margin: 0 0 10px 0;
            font-size: 16px;
            line-height: 1.4;
            border-bottom: 1px solid #6031BA;
            padding-bottom: 60px;
          }

          .post-slide__link {
            display: block;
            text-align: right;
            color: #6031BA;
            font-size: 14px;
            font-weight: 600;
            padding-top: 20px;
            border-top: 1px solid #6031BA;
          }

          .post-slide .btn {
            float: right;
          }

          @media (max-width: 1024px) {
            .post-slide {
              padding: 0 40px;
            }
          }

        `}</style>
      </div>
    )
  }

}

export default PostSlide;