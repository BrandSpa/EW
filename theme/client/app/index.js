import multipleRender from "react-multiple-render";
import Header from './components/header/header';
import Footer from './components/footer';
import Projects from './components/projects/section';
import HeroSlider from './components/heroSlider';

multipleRender(Header, '.header-container');
multipleRender(Footer, '.footer-container');
multipleRender(Projects, '.projects-container');
multipleRender(HeroSlider, '.heroSlider-container');
