import {ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText, Button as GlueButton} from '@gluestack-ui/themed';
import React, {ComponentProps} from 'react';


type IButtonProps = ComponentProps<typeof GlueButton>; // OMG!!!

interface Props extends IButtonProps {
    children: React.ReactNode & (JSX.Element | JSX.Element[]);
}

const Button = ({children, ...restProps}: Props) => {
    return (
        <ButtonGroup >
            <GlueButton
                {...restProps}
            >
                {children }
            </GlueButton>
        </ButtonGroup>
    );
};

Button.Text = ButtonText;
Button.Icon = ButtonIcon;
Button.Spinner = ButtonSpinner;

export default Button;
