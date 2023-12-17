import {GymAPI, GymPreview} from '@cjbreg/toplogger-sdk';
import {useEffect, useState} from 'react';

const useGymsHook = () => {
    const [gyms, setGyms] = useState<GymPreview[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const gymApi = new GymAPI();

    useEffect(() => {
        getGyms();
    }, []);

    const getGyms = async() => {
        setIsLoading(true);
        try {
            const result = await gymApi.getGyms();

            if (!result.ok) {
                throw new Error('Failed to get gyms');
            }

            setGyms(result.body);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        gyms,
        isLoading,
        error,
    };
};

export default useGymsHook;
