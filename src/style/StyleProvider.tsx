import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import {config as customConfig} from './config/gluestack-ui.config'; // Optional if you want to use custom theme

const StyleProvider = ({children}: {children: JSX.Element}) => {
    return (
        <GluestackUIProvider config={customConfig}>
            {children}
        </GluestackUIProvider>
    );
};

export default StyleProvider;
