import {GymAPI, GymPreview} from '@cjbreg/toplogger-sdk';
import {useEffect, useMemo, useState} from 'react';

const useGymsHook = () => {
    const [gyms, setGyms] = useState<GymPreview[]>([]);

    const memoizedGyms = useMemo(() => gyms, [gyms]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const gymApi = new GymAPI();

    useEffect(() => {
        getGyms();
    }, []);

    const getGyms = async() => {
        if (memoizedGyms.length > 0) {
            setIsUpdating(true);
        } else {
            setIsLoading(true);
        }
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
            setIsUpdating(false);
        }
    };

    const refreshGyms = () => {
        getGyms();
    };

    return {
        gyms: memoizedGyms,
        isLoading,
        isUpdating,
        refreshGyms,
        error,
    };
};

export default useGymsHook;
