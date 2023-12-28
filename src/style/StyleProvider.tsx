import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import {config as customConfig} from './config/gluestack-ui.config'; // Optional if you want to use custom theme
import {useColorScheme} from 'react-native';

const StyleProvider = ({children}: {children: JSX.Element}) => {
    const colorMode = useColorScheme() as 'light' | 'dark';

    return (
        <GluestackUIProvider config={customConfig} colorMode={colorMode}>
            {children}
        </GluestackUIProvider>
    );
};

export default StyleProvider;
