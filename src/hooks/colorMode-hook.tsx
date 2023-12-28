import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

const useColorMode = () => {
    const [colorMode, setColorMode] = useState<'dark' | 'light'>('light');
    useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        setColorMode(colorScheme === 'dark' ? 'dark' : 'light');
    }, []);
    return {
        colorMode,
    };
};

export default useColorMode;
