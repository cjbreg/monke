import {Toast as GlueToast, ToastDescription, ToastTitle} from '@gluestack-ui/themed';
import React, {ComponentProps} from 'react';
import ToastAction from './ToastAction';
import ToastContext from './ToastContext';
import ToastFlingWrapper from './ToastFlingWrapper';


type GlueToast = ComponentProps<typeof GlueToast>; // OMG!!!

interface Props extends GlueToast {
    children: React.ReactNode & (JSX.Element | JSX.Element[]);
    onDismiss: ()=>void;
}

const Toast = ({children, onDismiss, ...restProps}: Props) => {
    const restPropsWithoutRef = restProps as Omit<typeof restProps, 'ref'>;

    return (
        <ToastContext.Provider value={{nativeID: restProps.nativeID}}>
            <ToastFlingWrapper
                handleSwipeUp={onDismiss}
            >
                <GlueToast
                    {...restPropsWithoutRef}
                >
                    {children}
                </GlueToast>

            </ToastFlingWrapper>
        </ToastContext.Provider>
    );
};

Toast.Title = ToastTitle;
Toast.Description = ToastDescription;
Toast.Action = ToastAction;

export default Toast;
