import {Pressable} from '@gluestack-ui/themed';
import React from 'react';

type ActionProps = {
    children: React.ReactNode;
    onPress?: () => void;
};

const ToastAction = ({children, onPress}: ActionProps) => {
    return (
        <Pressable
            p='$2'
            onPress={onPress}
        >
            {children}
        </Pressable>
    );
};

export default ToastAction;
