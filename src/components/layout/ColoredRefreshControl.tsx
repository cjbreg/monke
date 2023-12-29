
import React, {ComponentProps} from 'react';
import {RefreshControl, useColorScheme} from 'react-native';
import {useToken} from '@gluestack-ui/themed';

type IRefreshControlProps = ComponentProps<typeof RefreshControl>;

const ColoredRefreshControl = ({...restProps}: IRefreshControlProps) => {
    const colorMode = useColorScheme();
    const tintColor = useToken('colors', colorMode !== 'light' ? 'latteFoam' : 'coffeeQuaternary');
    const color = useToken('colors', 'coffeeQuaternary');

    return (
        <RefreshControl
            {...restProps}
            tintColor={tintColor}
            colors={[color]}
        />
    );
};

export default ColoredRefreshControl;
