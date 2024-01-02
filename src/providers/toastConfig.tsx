import {Box, HStack, Icon, ToastDescription, ToastTitle, VStack} from '@gluestack-ui/themed';
import {CheckIcon} from '../components/Icon';
import React from 'react';
import {ToastConfig} from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
    success: ({text1, text2}) => (
        <ToastWrapper>
            <HStack
                p='$4'
                gap='$1'
                bg='$latteFoamTertiary'
                $dark-bg='$coffee'
                flex={1}
                borderRadius="$xl"
            >
                <Box pt='$0.5'>
                    <Icon as={CheckIcon} size='xl' />
                </Box>

                <VStack flex={1}>
                    <ToastTitle>{text1}</ToastTitle>

                    <ToastDescription>{text2}</ToastDescription>
                </VStack>
            </HStack>
        </ToastWrapper>
    ),
};

const ToastWrapper = ({children}: {children: JSX.Element}) => {
    return (
        <Box
            w='$full'
            p='$6'
        >
            {children}
        </Box>
    );
};

