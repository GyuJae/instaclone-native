import {TouchableOpacityProps} from 'react-native';

export interface IAuthButtonProps extends TouchableOpacityProps {
  disabled: boolean;
  onPress: () => void;
  text: string;
}
