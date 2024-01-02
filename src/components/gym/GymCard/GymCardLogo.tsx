import {Box} from '@gluestack-ui/themed';
import Image from '../../../ui/atoms/image';
import React from 'react';
import {useGymCardContext} from './GymCardContext';

interface Props {
    width?: number;
    height?: number;
}

const GymCardLogo = ({width = 75, height = 75}: Props) => {
    const {gym} = useGymCardContext();

    const logoUrl = `https://cdn1.toplogger.nu/images/gyms/${gym.id_name}/logo_100x100.png`;

    return (
        <Box
            borderRadius='$full'
            overflow='hidden'
            justifyContent='center'
            alignItems='center'
        >
            <Image
                source={logoUrl}
                width={width}
                height={height}
                alt={gym.name}
            />
        </Box>
    );
};

export default React.memo(GymCardLogo);
