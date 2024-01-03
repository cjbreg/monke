import React, {ComponentProps} from 'react';
import {Box} from '@gluestack-ui/themed';
import {Gym} from '@cjbreg/toplogger-sdk';
import GymCardContext from './GymCardContext';
import GymCardHeader from './GymCardHeader';
import GymCardLogo from './GymCardLogo';
import GymCardTitle from './GymCardTitle';

type IBoxProps = ComponentProps<typeof Box>;

type Props = {
    gym: Gym
    children: React.ReactNode
    _style?: IBoxProps
}

const GymCard = ({gym, children, _style}: Props) => {
    const stylePropsWithoutRef = _style as Omit<typeof _style, 'ref'>;

    return (
        <GymCardContext.Provider value={{gym}}>
            <Box
                {...stylePropsWithoutRef}
            >
                {children}
            </Box>
        </GymCardContext.Provider>
    );
};

GymCard.Logo = GymCardLogo;
GymCard.Title = GymCardTitle;
GymCard.Header = GymCardHeader;

export default GymCard;
