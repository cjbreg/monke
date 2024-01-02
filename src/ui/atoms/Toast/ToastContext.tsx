import {createContext, useContext} from 'react';

const ToastContext = createContext<{nativeID: string | undefined} | null>(null);

export function useToastContext() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('Toast.* component must be rendered a child of Toast component');
    }

    return context;
}

export default ToastContext;
