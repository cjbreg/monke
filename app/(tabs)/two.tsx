import {Box, Divider, Heading} from '@gluestack-ui/themed';
import EditScreenInfo from '../../src/components/EditScreenInfo';


export default function TabTwoScreen() {
    return (

        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
        >
            <Heading>Tab Two</Heading>

            <Divider
                my='$8'
                bgColor='$primary500'
                w='80%'
            />

            <EditScreenInfo path="app/(tabs)/two.tsx" />
        </Box>
    );
}

