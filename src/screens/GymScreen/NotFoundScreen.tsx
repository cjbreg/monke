import {Button, ButtonIcon, ButtonText, Heading, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {SearchIcon} from '../../components/Icon';
import {router} from 'expo-router';

const NotFoundScreen = () => {

    const openSearchModal = () => {
        router.push('/search');
    };

    return (
        <VStack
            alignItems='center'
            gap='$4'
        >
            <Heading>No gym selected</Heading>

            <Text textAlign='center'>
                    Please select a gym to view its opening hours.
            </Text>

            <Button
                gap='$2'
                onPress={openSearchModal}
            >
                <ButtonText>Search</ButtonText>

                <ButtonIcon as={SearchIcon} />
            </Button>
        </VStack>
    );
};

export default NotFoundScreen;
