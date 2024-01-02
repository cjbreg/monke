import {Gym} from '@cjbreg/toplogger-sdk';
import GymCardContext from './GymCardContext';
import GymCardHeader from './GymCardHeader';
import GymCardLogo from './GymCardLogo';
import GymCardTitle from './GymCardTitle';
import React from 'react';

type Props = {
    gym: Gym
    children: React.ReactNode
}

const GymCard = ({gym, children}: Props) => {
    return (
        <GymCardContext.Provider value={{gym}}>
            {children}
        </GymCardContext.Provider>
    );
};

GymCard.Logo = GymCardLogo;
GymCard.Title = GymCardTitle;
GymCard.Header = GymCardHeader;

export default GymCard;
