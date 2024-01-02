import {Box} from '@gluestack-ui/themed';
import Image from '../../../ui/atoms/image';
import React from 'react';

import {useGymListItemContext} from './GymPreviewContext';

interface Props {
    width?: number;
    height?: number;
}

const GymCardLogo = ({width = 50, height = 50}: Props) => {
    const {gymPreview} = useGymListItemContext();

    const logoUrl = `https://cdn1.toplogger.nu/images/gyms/${gymPreview.id_name}/logo_100x100.png`;

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
                alt={gymPreview.name}
            />
        </Box>
    );
};

export default React.memo(GymCardLogo);
