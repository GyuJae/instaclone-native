import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import {useSeeComments} from '../../apollo';
import ScreenLayout from '../../components/ScreenLayout';
import {IStackNavigatorParamList} from '../../navigators/LoggedInNav/Stack';
import {colors} from '../../themes';
import {Input} from './Input';
import {List} from './List';
import {NotFound} from './NotFound';

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignItems: 'center',
};

export const Comments: React.FC<
  StackScreenProps<IStackNavigatorParamList, 'comments'>
> = ({route}) => {
  const {
    params: {postId},
  } = route;
  const [refreshing, setRefeshing] = useState<boolean>(false);
  const {comments, loading, refetch} = useSeeComments(postId);

  const handleRefetch = async () => {
    setRefeshing(true);
    await refetch();
    setRefeshing(false);
  };
  return (
    <View style={Wrapper}>
      <ScreenLayout loading={loading}>
        <List
          refreshing={refreshing}
          comments={comments}
          handleRefetch={handleRefetch}
        />
        <NotFound inView={!!(comments && comments.length === 0)} />
      </ScreenLayout>
      <Input postId={postId} handleRefetch={handleRefetch} />
    </View>
  );
};
