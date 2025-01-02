import { ReactNode } from "react";

export interface IContext {
    sharedValue: string;
}

export interface ProviderProps {
    children: ReactNode;
}