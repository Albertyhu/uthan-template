export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/post-1 copy_dd4f8de5.mjs').then(n => n.p);

export { page };
