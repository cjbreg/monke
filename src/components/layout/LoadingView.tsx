
import {Box, Spinner, styled} from '@gluestack-ui/themed';
import {AnimatePresence} from 'moti';
import FadeInView from '../animations/FadeInView';
import React from 'react';
import {StyleSheet} from 'react-native';

type SpinnerProps = typeof Spinner;

interface ILoadingScreenProps {
    _spinner?: SpinnerProps;
}

interface PresenceProps extends ILoadingScreenProps {
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

const LoadingView = ({_spinner, isLoading, children, showSpinner = true, showContent = true, ...restProps}: PresenceProps) => {
    return (
        <LoadingBox
            {...restProps}
        >
            <AnimatePresence exitBeforeEnter>
                {isLoading && showSpinner && (
                    <FadeInView key="loader" style={styles.presenceWrapper}>
                        <Spinner size='large' color='black' h={300} {..._spinner}/>
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
        width: '100%',
        height: '100%',
    },
});

export default LoadingView;
