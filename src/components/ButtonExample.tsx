import {HStack, Icon, VStack, useToast} from '@gluestack-ui/themed';
import Button from '../ui/atoms/Button';
import {ChevronRightIcon} from './Icon';
import React from 'react';
import Toast from '../ui/atoms/Toast';

const ButtonExample = () => {
    const {show, close, isActive} = useToast();

    return (
        <Button
            onPress={() => {
                show({
                    placement: 'top',
                    render: ({id}) => {
                        const toastId = id.toString();
                        const handleClose = () => {
                            close(id);
                        };

                        if(isActive(id - 1)) { // close previous toast
                            close(id - 1);
                        }

                        return (
                            <Toast
                                nativeID={toastId}
                                action="attention"
                                variant="accent"
                                onDismiss={handleClose}
                            >
                                <HStack
                                    justifyContent='space-between'
                                    alignItems='center'
                                    w='100%'
                                >
                                    <VStack
                                        gap='$2'
                                    >
                                        <Toast.Title>Attention</Toast.Title>

                                        <Toast.Description>
                                                This is a toast description.
                                        </Toast.Description>
                                    </VStack>

                                    <Toast.Action
                                        onPress={handleClose}
                                    >
                                        <Icon as={ChevronRightIcon} />
                                    </Toast.Action>
                                </HStack>
                            </Toast>
                        );
                    },
                });
            }}
        >
            <Button.Text>Toast test</Button.Text>
        </Button>
    );
};

export default ButtonExample;
