
import {Box, Spinner, styled} from '@gluestack-ui/themed';
import {AnimatePresence} from 'moti';
import {ComponentProps} from 'react';
import FadeInView from '../animations/FadeInView';
import React from 'react';
import {StyleSheet} from 'react-native';

type IBoxProps = ComponentProps<typeof Box>; // OMG!!!

interface PresenceProps extends IBoxProps {
    isLoading: boolean;
    showSpinner?: boolean;
    showContent?: boolean;
    children: JSX.Element;
}

const LoadingBox = styled(Box, {
    bgColor: '$latteFoam',
    height: '$full',
    py: '$4',
    px: '$6',
});

const LoadingView = ({isLoading, children, showSpinner = true, showContent = true, ...restProps}: PresenceProps) => {
    const restPropsWithoutRef = restProps as Omit<typeof restProps, 'ref'>;

    return (
        <LoadingBox
            {...restPropsWithoutRef}
        >
            <AnimatePresence exitBeforeEnter>
                {isLoading && showSpinner && (
                    <FadeInView key="loader" style={styles.presenceWrapper}>
                        <Spinner size='large' color='black' h={300}/>
                    </FadeInView>
                )}

                {!isLoading && showContent && (<FadeInView key="children" style={styles.presenceWrapper}>{children}</FadeInView>)}
            </AnimatePresence>
        </LoadingBox>
    );
};

const styles = StyleSheet.create({
    presenceWrapper: {
        flex: 1,
    },
});

export default React.memo(LoadingView);
