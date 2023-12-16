import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function usePersistedState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState(defaultValue);

    useEffect(() => {
        (async() => {
            const item = await AsyncStorage.getItem(key);
            if (item !== null) {
                const savedState = JSON.parse(item);
                if (savedState !== null) {
                    setState(savedState);
                }
            }
        })();
    }, [key]);

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
