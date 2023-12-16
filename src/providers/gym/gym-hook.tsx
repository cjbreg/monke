import {Gym, GymAPI} from '@cjbreg/toplogger-sdk';
import {useEffect, useState} from 'react';

const useGymHook = (gymId: number | undefined): [Gym | undefined, boolean, string | unknown] => {
    const [gym, setGym] = useState<Gym | undefined>(undefined);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const gymApi = new GymAPI();

    useEffect(() => {
        if (gymId) {
            getGym(gymId);
        }
    }, [gymId]);

    const getGym = async(gymId: number) => {
        setIsLoading(true);
        try {
            const result = await gymApi.getGym(gymId);
            console.log(result.ok);

            if (!result.ok) {
                throw new Error('Failed to get gym');
            }

            setGym(result.body);
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    return [
        gym,
        isLoading,
        error,
    ];
};

export default useGymHook;
