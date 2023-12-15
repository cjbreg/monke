import {Box, Text} from '@gluestack-ui/themed';
import {ExternalLink} from './ExternalLink';
import React from 'react';



export default function EditScreenInfo({path}: { path: string }) {
    return (
        <Box>
            <Box
                alignItems="center"
                mx={50}
            >
                <Text size="lg" textAlign='center'>
                    Open up the code for this screen:
                </Text>

                <Box
                    my='$2'
                    borderRadius='$sm'
                    px='$1'
                    py='$0.5'
                    bgColor='$primary500'
                >
                    <Text color='$light100'>{path}</Text>
                </Box>

                <Text size="lg" textAlign='center'>
                    Change any of the text, save the file, and your app will automatically update.
                </Text>
            </Box>

            <Box
                mt='$4'
                mx='$5'
                alignItems="center"
            >
                <ExternalLink
                    href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
                >
                    <Text
                        size="sm"
                        textAlign='center'
                        py='$4'
                    >
                        Tap here if your app does not automatically update after making changes
                    </Text>
                </ExternalLink>
            </Box>
        </Box>
    );
}
