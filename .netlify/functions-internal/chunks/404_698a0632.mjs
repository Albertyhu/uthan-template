export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/404_8bf7126a.mjs').then(n => n._);

export { page };
