export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/testimonial_8369ab7d.mjs').then(n => n.t);

export { page };
