export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/post-1 copy_b334e37d.mjs').then(n => n.p);

export { page };
