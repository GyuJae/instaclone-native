import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList} from 'react-native';
import {useSeeFeed} from '../../apollo/queries/seeFeed.query';
import ScreenLayout from '../../components/ScreenLayout';
import {PostItem} from '../../components';

type FeedScreenProps = NativeStackScreenProps<any, 'feed'>;

export const Feed = ({navigation}: FeedScreenProps) => {
  const {data, loading, refetch} = useSeeFeed(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleClickNavigatePhoto = () =>
    navigation.navigate('stack', {screen: 'photo', params: {postId: 1}});

  const handleClickNavigationProfile = () =>
    navigation.navigate('stack', {screen: 'profile', params: {userId: 1}});

  const handleClickNavigationLikes = () =>
    navigation.navigate('stack', {screen: 'likes', params: {postId: 1}});

  const handleClickNavigationComments = () =>
    navigation.navigate('stack', {screen: 'comments', params: {postId: 1}});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={data?.seeFeed.posts}
        keyExtractor={post => `feed-${post.id}`}
        renderItem={post => (
          <PostItem
            post={post.item}
            handleClickNavigationProfile={handleClickNavigationProfile}
            handleClickNavigatePhoto={handleClickNavigatePhoto}
            handleClickNavigationLikes={handleClickNavigationLikes}
            handleClickNavigationComments={handleClickNavigationComments}
          />
        )}
      />
    </ScreenLayout>
  );
};
