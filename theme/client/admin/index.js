import multipleRender from 'react-multiple-render';
import ProjectMetabox from './components/project';
import ProductMetabox from './components/product';

multipleRender(ProjectMetabox, '.project-metabox-container');
multipleRender(ProductMetabox, '.product-metabox-container');
