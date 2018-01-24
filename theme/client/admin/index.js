import multipleRender from 'react-multiple-render';
import ProjectMetabox from './components/project';
import ProductMetabox from './components/product';
import PostMetabox from './components/post';

multipleRender(ProjectMetabox, '.project-metabox-container');
multipleRender(ProductMetabox, '.product-metabox-container');
multipleRender(PostMetabox, '.post-metabox-container');
