import {GymProvider} from '../providers/gym/GymProvider';
import StyleProvider from '../style/StyleProvider';

const Provider = ({children}: { children: React.ReactElement }) => {
    return (
        <StyleProvider>
            <GymProvider>
                {children}
            </GymProvider>
        </StyleProvider>
    );
};

export default Provider;
