import {createContext, useContext, useMemo} from 'react';
import {isNil} from '@helpers/lang';
import useGymHook from '@providers/gym/gym-hook';
import usePersistedState from '@/hooks/persistedState-hook';

type GymContextValue = ReturnType<typeof useProvideGym>;

const GymContext = createContext<ReturnType<typeof useProvideGym> | undefined>(undefined);

export function GymProvider({
    children,
    value,
} : {
    children: React.ReactNode;
    value?: GymContextValue;
}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const gym = value ?? useProvideGym();
    return (
        <GymContext.Provider value={gym}>
            {children}
        </GymContext.Provider>
    );
}

export const useGym = () => {
    return useContext(GymContext);
};

const useProvideGym = () => {
    const [gymId, setGymId] = usePersistedState<number>('gymId', 6);
    const [gym, isGymHookLoading, gymHookError] = useGymHook(gymId);

    const isLoading = useMemo(() => {
        return isGymHookLoading;
    }, [isGymHookLoading]);
    const isError = useMemo(() => {
        !isNil(gymHookError) ? true : false;
    }, [gymHookError]);

    return {
        gym,
        setGymId,
        isLoading,
        isError,
    };
};
