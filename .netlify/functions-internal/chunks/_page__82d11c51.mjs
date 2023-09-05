export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./prerender_06e6bc05.mjs').then(n => n.e);

export { page };
