import {Path} from 'react-native-svg';
import {createIcon} from '@gluestack-ui/themed';

const SearchIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
        <Path
            d="M10.333 9.333h-.526l-.187-.18a4.314 4.314 0 0 0 1.047-2.82 4.333 4.333 0 1 0-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334Zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
            fill="currentColor"
        />
    ),
});

const ChevronRightIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
        <Path
            d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z"
            fill="currentColor"
        />
    ),
});

const CheckIcon = createIcon({
    viewBox: '0 0 24 24',
    path: (
        <Path
            d="m9.55 17.654-5.335-5.335 1.07-1.069 4.265 4.265 9.165-9.165 1.07 1.07L9.55 17.653Z"
            fill="currentColor"
        />
    ),
});



export {
    SearchIcon,
    ChevronRightIcon,
    CheckIcon,
};
