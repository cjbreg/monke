import {GymProvider} from '../providers/gym/GymProvider';
import StyleProvider from '../style/StyleProvider';
import Toast from 'react-native-toast-message';
import {toastConfig} from './toastConfig';

const Provider = ({children}: { children: React.ReactElement }) => {
    return (
        <StyleProvider>
            <GymProvider>
                {children}

                <Toast config={toastConfig} />
            </GymProvider>
        </StyleProvider>
    );
};

export default Provider;
