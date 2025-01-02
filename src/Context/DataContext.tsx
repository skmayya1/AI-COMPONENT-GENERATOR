import { createContext, ReactNode, useEffect, useState } from "react";

interface IContext { 
    sharedValue: string;
    Data?: IData | null;
}

interface ProviderProps {
    children: ReactNode;
}
interface IData {
    Code: string;
    ComponentName: string;
    FileType: string;
}

export const context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }:ProviderProps) => { 
    const sharedValue = 'This is a shared value';
    const [Data, setData] = useState<IData | null>(null)
    useEffect(() => {
        setData(null)
    }, [])
    
    return (
        <context.Provider value={{sharedValue,Data}}>
            {children}
        </context.Provider>
    );
};

export default ContextProvider;
