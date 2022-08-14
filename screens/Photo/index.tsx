import React, {useState} from 'react';
import {RefreshControl, ScrollView, ViewStyle} from 'react-native';
import {useSeePost} from '../../apollo';
import {PostItem} from '../../components';
import ScreenLayout from '../../components/ScreenLayout';
import {StackScreenProps} from '@react-navigation/stack';
import {IStackNavigatorParamList} from '../../navigators/LoggedInNav/Stack';

const Wrapper: ViewStyle = {
  flex: 1,
};

export const Photo: React.FC<
  StackScreenProps<IStackNavigatorParamList, 'photo'>
> = ({navigation, route}) => {
  const {
    params: {postId},
  } = route;
  const {post, loading, refetch} = useSeePost(postId);

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleClickNavigationProfile = (userId: number, username: string) =>
    navigation.navigate('profile', {
      userId,
      username,
    });

  const handleClickNavigationLikes = () =>
    navigation.navigate('likes', {postId});

  const handleClickNavigationComments = () =>
    navigation.navigate('comments', {postId});

  if (!post) {
    return null;
  }
  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        style={Wrapper}>
        <PostItem
          post={post}
          handleClickNavigationProfile={() =>
            handleClickNavigationProfile(post.user.id, post.user.username)
          }
          handleClickNavigationLikes={handleClickNavigationLikes}
          handleClickNavigationComments={handleClickNavigationComments}
        />
      </ScrollView>
    </ScreenLayout>
  );
};
