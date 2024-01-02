import {createContext, useContext} from 'react';
import {GymPreview} from '@cjbreg/toplogger-sdk';

const GymListItemContext = createContext<{gymPreview: GymPreview, activeGymId: number | undefined} | null>(null);

export function useGymListItemContext() {
    const context = useContext(GymListItemContext);

    if (!context) {
        throw new Error('GymListItem.* component must be rendered a child of GymListItem component');
    }

    return context;
}

export default GymListItemContext;
