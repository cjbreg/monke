import {Gym, GymAPI} from '@cjbreg/toplogger-sdk';
import {useEffect, useState} from 'react';

const useGymHook = (gymId: number | undefined): [Gym | undefined, boolean, boolean, () => void, string | unknown] => {
    const [gym, setGym] = useState<Gym | undefined>(undefined);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const gymApi = new GymAPI();

    useEffect(() => {
        if(gym && gymId === gym.id) {
            return;
        }

        if (gymId) {
            getGym(gymId);
        }
    }, [gymId]);

    const getGym = async(gymId: number) => {
        if (gym && gymId === gym.id) {
            setIsUpdating(true);
        } else {
            setIsLoading(true);
        }
        try {
            const result = await gymApi.getGym(gymId);
            if (!result.ok) {
                throw new Error('Failed to get gym');
            }

            setGym(result.body);
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setIsUpdating(false);
            }, 2000); // Delay to allow for animation
        }
    };

    const refreshGym = () => {
        if (gymId) {
            getGym(gymId);
        }
    };

    return [
        gym,
        isLoading,
        isUpdating,
        refreshGym,
        error,
    ];
};

export default useGymHook;
