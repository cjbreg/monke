import {Directions, FlingGestureHandler, GestureHandlerRootView, State} from 'react-native-gesture-handler';
import React from 'react';

type Props = {
    children: React.ReactNode;
    handleSwipeUp?: () => void;
}

const ToastFlingWrapper = ({children, handleSwipeUp}: Props) => {
    if (!handleSwipeUp) {
        return <>{children}</>;
    }

    const handleFling = () => {
        handleSwipeUp();
    };

    return (
        <GestureHandlerRootView>
            <FlingGestureHandler
                direction={Directions.UP}
                onHandlerStateChange={({nativeEvent}) => {
                    if (nativeEvent.state === State.ACTIVE) {
                        handleFling();
                    }
                }}
            >
                {children}
            </FlingGestureHandler>
        </GestureHandlerRootView>
    );
};

export default ToastFlingWrapper;
