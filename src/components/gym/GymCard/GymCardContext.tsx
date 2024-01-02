import {createContext, useContext} from 'react';
import {Gym} from '@cjbreg/toplogger-sdk';

const GymCardContext = createContext<{gym: Gym} | null>(null);

export function useGymCardContext() {
    const context = useContext(GymCardContext);

    if (!context) {
        throw new Error('GymCard.* component must be rendered a child of GymCard component');
    }

    return context;
}

export default GymCardContext;
