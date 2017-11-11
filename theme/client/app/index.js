import multipleRender from "react-multiple-render";
import Header from './components/header';
import Projects from './components/projects/section';
import HeroSlider from './components/heroSlider';

multipleRender(Header, '.header-container');
multipleRender(Projects, '.projects-container');
multipleRender(HeroSlider, '.heroSlider-container');
