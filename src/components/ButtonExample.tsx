import {HStack, Pressable, Toast, ToastDescription, ToastTitle, VStack, useToast} from '@gluestack-ui/themed';
import Button from '../ui/atoms/Button';
import React from 'react';

const ButtonExample = () => {
    const {show, close, isActive} = useToast();

    return (
        <Button
            onPress={() => {
                show({
                    placement: 'top',
                    render: ({id}: {id: number}) => {
                        const toastId = 'toast-' + id;

                        const handleClose = () => {
                            close(id);
                        };

                        if(isActive(id - 1)) { // close previous toast
                            close(id - 1);
                        }

                        return (
                            <Toast
                                nativeID={toastId} // Missing safearea context for Android: https://github.com/gluestack/gluestack-ui/issues/1334
                                action="attention"
                                variant="accent"
                                overflow="hidden"
                            >

                                <HStack
                                    justifyContent='space-between'
                                    alignItems='center'
                                    w='100%'
                                >
                                    <VStack
                                        gap='$2'
                                    >
                                        <ToastTitle>Attention</ToastTitle>

                                        <ToastDescription>
                                                This is a toast description.
                                        </ToastDescription>
                                    </VStack>

                                    <Pressable
                                        onPress={handleClose}
                                        px='$2'
                                    >
                                        <ToastTitle>X</ToastTitle>
                                    </Pressable>
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
