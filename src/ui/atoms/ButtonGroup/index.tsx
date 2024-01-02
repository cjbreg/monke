import React, {ComponentProps} from 'react';
import {ButtonGroup as GlueButtonGroup} from '@gluestack-ui/themed';


type IButtonGroupProps = ComponentProps<typeof GlueButtonGroup>; // OMG!!!

interface Props extends IButtonGroupProps {
    children: React.ReactNode & (JSX.Element | JSX.Element[]);
}

const ButtonGroup = ({children, ...restProps}: Props) => {
    const restPropsWithoutRef = restProps as Omit<typeof restProps, 'ref'>;

    return (
        <GlueButtonGroup
            {...restPropsWithoutRef}
        >
            {children}
        </GlueButtonGroup>
    );
};

export default ButtonGroup;
