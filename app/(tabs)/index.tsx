import {Box, Divider, Heading} from '@gluestack-ui/themed';
import EditScreenInfo from '@components/EditScreenInfo';

export default function TabOneScreen() {
    return (
        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
        >
            <Heading>Tab One</Heading>

            <Divider
                my='$8'
                bgColor='$primary500'
                w='80%'
            />

            <EditScreenInfo path="app/(tabs)/index.tsx" />
        </Box>
    );
}
