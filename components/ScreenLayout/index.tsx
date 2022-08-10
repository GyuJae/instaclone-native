import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {colors} from '../../themes';

interface IProps {
  loading: boolean;
}

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
};

const ScreenLayout: React.FC<PropsWithChildren<IProps>> = ({
  loading,
  children,
}) => {
  if (loading) {
    return (
      <View style={Wrapper}>
        <ActivityIndicator color={colors.text} />
      </View>
    );
  }

  return <View style={Wrapper}>{children}</View>;
};

export default ScreenLayout;
