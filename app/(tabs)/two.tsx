import {Box, Divider, Heading} from '@gluestack-ui/themed';
import Palette from '../../src/components/cheatsheet/Palette';



export default function TabTwoScreen() {
    return (

        <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
        >
            <Heading>Color Palette</Heading>

            <Palette />

            <Divider
                my='$8'
                bgColor='$primary500'
                w='80%'
            />
        </Box>
    );
}

