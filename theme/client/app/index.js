import multipleRender from "react-multiple-render";
import Header from './components/header';
import Projects from './components/projects/section';

multipleRender(Header, '.header-container');
multipleRender(Projects, '.projects-container');
