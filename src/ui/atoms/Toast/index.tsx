import {Toast as GlueToast, ToastDescription, ToastTitle} from '@gluestack-ui/themed';
import React, {ComponentProps} from 'react';
import ToastAction from './ToastAction';

type GlueToast = ComponentProps<typeof GlueToast>; // OMG!!!

interface Props extends GlueToast {
    children: React.ReactNode & (JSX.Element | JSX.Element[]);
}

const Toast = ({children, ...restProps}: Props) => {
    const restPropsWithoutRef = restProps as Omit<typeof restProps, 'ref'>;

    return (
        <GlueToast
            {...restPropsWithoutRef}
        >
            {children}
        </GlueToast>
    );
};

Toast.Title = ToastTitle;
Toast.Description = ToastDescription;
Toast.Action = ToastAction;

export default Toast;
