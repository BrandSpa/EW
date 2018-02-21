import React, { Component } from 'react';
import Post from './post_carousel';

class PostsCarousel extends Component {
  state = {
		slide: 0,
    mobile: false
	}

  componentDidMount = () => {
    this.isMobile();
    window.addEventListener('resize', this.isMobile);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.isMobile);
  }

  isMobile = () => {
    if(window.innerWidth < 768) {
      this.setState({mobile: true});
    } else {
      this.setState({mobile: false});
    }
  }

	next = e => {
		if(e) e.preventDefault();
	  let total = (this.props.posts.length / 2) - 1;

    if(this.state.mobile) {
      total = this.props.posts.length - 1;
    }

		const current = this.state.slide;
		const slide = current < total ? current + 1 : 0;
		this.setState({ slide });
	}

	prev = e => {
		if(e) e.preventDefault();
    let total = (this.props.posts.length / 2) - 1;

    if(this.state.mobile) {
      total = this.props.posts.length - 1;
    }

		const current = this.state.slide;
		const slide = current > 0 ? current - 1 : 0;
		this.setState({ slide });
	}

  render() {
    const { posts } = this.props;
    let total = posts.length;
    let viewportWidth = `${total / 2 * 100}%`;
    let viewportLeft = `-${this.state.slide * 100}%`;

    if(this.state.mobile) {
      viewportWidth = `${total * 100}%`;
    }

    return (
      <div className="posts-slider">
        <div className="posts-slider__container">
          <div className="posts-slider__viewport" style={{width: viewportWidth,  left: viewportLeft}}>
            {posts.map(post =>
              <Post key={post.ID} post={post} total={posts.length} mobile={this.state.mobile} />
            )}
          </div>
        </div>
        <div className="posts-slider__btns">
					<a className="posts-slider__btns__left" href="#" onClick={this.prev}>
					 <i className="ion-ios-arrow-left"></i>
					</a>
					<a className="posts-slider__btns__right" href="#" onClick={this.next}>
					<i className="ion-ios-arrow-right"></i>
					</a>
				</div>
				<style jsx>{`
					.posts-slider {
						position: relative;
						margin: 0 -10px;
					}

					.posts-slider__container {
						overflow: hidden;
						padding: 40px 5px;
					}

					.posts-slider__viewport {
						position: relative;
						transition: left .7s;
						will-change: left;
						z-index: 1;
					}

					.posts-slider__btns {
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
					}

					.posts-slider__btns a {
						position: absolute;
						top: 0;
						bottom: 0;
						width: 30px;
						height: 60px;
						margin: auto;
						font-size: 30px;
						z-index: 2;
					}

					.posts-slider__btns a i {
						font-size: 60px;
						color: #039ED8;
					}

					.posts-slider__btns__left {
						left: -40px;
					}

					.posts-slider__btns__left {
						left: 10px;
					}

					.posts-slider__btns__right {
						right: 10px;
					}

					@media (min-width: 1024px) {
						.posts-slider__btns__left {
							left: -40px;
						}

						.posts-slider__btns__right {
							right: -40px;
						}
					}



				`}</style>
      </div>
    )
  }
}

export default PostsCarousel;