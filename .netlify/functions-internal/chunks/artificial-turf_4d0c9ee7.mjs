export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/artificial-turf_51fe04d1.mjs').then(n => n.c);

export { page };