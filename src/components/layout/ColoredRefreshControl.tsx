import React, {ComponentProps} from 'react';
import {RefreshControl, useColorScheme} from 'react-native';
import {useToken} from '@gluestack-ui/themed';

type IRefreshControlProps = ComponentProps<typeof RefreshControl>;

const ColoredRefreshControl = ({...restProps}: IRefreshControlProps) => {
    const colorMode = useColorScheme();
    const refreshColor = useToken('colors', colorMode !== 'light' ? '$latteFoam' : '$coffeeQuaternary');


    return (
        <RefreshControl
            {...restProps}
            tintColor={refreshColor}
            colors={[refreshColor]}
        />
    );
};

export default ColoredRefreshControl;
