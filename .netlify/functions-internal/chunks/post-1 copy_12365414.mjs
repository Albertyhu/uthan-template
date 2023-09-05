export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/post-1 copy_f717e2e3.mjs').then(n => n.p);

export { page };
