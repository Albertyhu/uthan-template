import { createContext } from 'react'; 
import type { StepType } from './interface.tsx';
export const StepContext = createContext<StepType | null>(null)