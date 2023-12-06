export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/turf-calculator_c1bbec76.mjs').then(n => n.t);

export { page };
