import {Image as ExpoImage} from 'react-native';
import {createImage} from '@gluestack-ui/image';
import {styled} from '@gluestack-style/react';

const StyledImage = styled(ExpoImage, {
    w: 75,
    h: 75,
});

const Image = createImage({
    Root: StyledImage,
});

export default Image;
