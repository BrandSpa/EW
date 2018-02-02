import multipleRender from 'react-multiple-render';
import Header from './components/header/header';
import Footer from './components/footer';
import Projects from './components/projects/section';
import News from './components/news/section';
import RelatedProjects from './components/projects/related';
import Products from './components/products/section';
import HeroSlider from './components/heroSlider';
import ContactUs from './components/contactUs';
import PostsCarousel from './components/posts/carousel';
import ProjectsCarousel from './components/projects/carousel';
import arrowAction from './../lib/arrow';

multipleRender(Header, '.header-container');
multipleRender(Footer, '.footer-container');
multipleRender(Projects, '.projects-container');
multipleRender(RelatedProjects, '.related-projects-container');
multipleRender(Products, '.products-container');
multipleRender(News, '.news-container');
multipleRender(HeroSlider, '.heroSlider-container');
multipleRender(ContactUs, '.contact-us-container');
multipleRender(PostsCarousel, '.posts-container');
multipleRender(ProjectsCarousel, '.projects-carousel-container');

arrowAction();
