import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config as customConfig} from './config/gluestack-ui.config'; // Optional if you want to use custom theme

const StyleProvider = ({children}: {children: JSX.Element}) => {
    const [colorMode, setColorMode] = useState<'dark' | 'light'>('light');
    React.useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        setColorMode(colorScheme === 'dark' ? 'dark' : 'light');
    }, []);

    return (
        <GluestackUIProvider config={customConfig} colorMode={colorMode}>
            {children}
        </GluestackUIProvider>
    );
};

export default StyleProvider;
