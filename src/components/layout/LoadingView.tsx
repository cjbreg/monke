
import {Box, Spinner} from '@gluestack-ui/themed';
import {AnimatePresence} from 'moti';
import {ComponentProps} from 'react';
import FadeInView from '../animations/FadeInView';
import React from 'react';
import {StyleSheet} from 'react-native';

type IBoxProps = ComponentProps<typeof Box>;

interface PresenceProps extends IBoxProps {
    isLoading: boolean;
    showSpinner?: boolean;
    showContent?: boolean;
    children: JSX.Element;
}

const LoadingView = ({isLoading, children, showSpinner = true, showContent = true, ...restProps}: PresenceProps) => {
    const restPropsWithoutRef = restProps as Omit<typeof restProps, 'ref'>;

    return (
        <Box
            height="$full"
            bgColor="$latteFoam"
            $dark-bg="$coffeeQuaternary"
            px="$6"
            py="$4"
            {...restPropsWithoutRef}
        >
            <AnimatePresence exitBeforeEnter>
                {isLoading && showSpinner && (
                    <FadeInView key="loader" style={styles.presenceWrapper}>
                        <Spinner size='large' color='coffeeTertiary' $dark-color='$latteFoam' h={300}/>
                    </FadeInView>
                )}

                {!isLoading && showContent && (<FadeInView key="children" style={styles.presenceWrapper}>{children}</FadeInView>)}
            </AnimatePresence>
        </Box>
    );
};

const styles = StyleSheet.create({
    presenceWrapper: {
        flex: 1,
    },
});

export default LoadingView;
