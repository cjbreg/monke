import React from 'react';
import {TouchableOpacity} from 'react-native';

type ActionProps = {
    children: React.ReactNode;
    onPress?: () => void;
};

const ToastAction = ({children, onPress}: ActionProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    );
};

export default ToastAction;
