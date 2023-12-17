
import {Gym, GymPreview} from '@cjbreg/toplogger-sdk/Models';
import {Box} from '@gluestack-ui/themed';
import Image from '../ui/atoms/image';
import React from 'react';

interface Props {
    gym: Gym | GymPreview;
    width?: number;
    height?: number;
}

const GymLogo = (props: Props) => {
    const {gym, width = 75, height = 75} = props;

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

export default GymLogo;
