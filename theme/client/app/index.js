import multipleRender from 'react-multiple-render';
import Header from './components/header/header';
import Footer from './components/footer';
import Projects from './components/projects/section';
import Products from './components/products/section';
import HeroSlider from './components/heroSlider';
import ContactUs from './components/contactUs';

multipleRender(Header, '.header-container');
multipleRender(Footer, '.footer-container');
multipleRender(Projects, '.projects-container');
multipleRender(Products, '.products-container');
multipleRender(HeroSlider, '.heroSlider-container');
multipleRender(ContactUs, '.contact-us-container');
