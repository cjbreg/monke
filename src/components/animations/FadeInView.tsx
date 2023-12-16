import {MotiView} from 'moti';
import React from 'react';
import {ViewStyle} from 'react-native';

const FadeInView = (props: {key?: string, children: JSX.Element, style?: ViewStyle}) => {
    return (
        <MotiView
            from={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            {...props}
        />
    );
};

export default FadeInView;
