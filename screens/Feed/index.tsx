import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList} from 'react-native';
import {useSeeFeed} from '../../apollo/queries/seeFeed.query';
import ScreenLayout from '../../components/ScreenLayout';
import {PostItem} from '../../components';

type FeedScreenProps = NativeStackScreenProps<any, 'feed'>;

export const Feed = ({navigation}: FeedScreenProps) => {
  const {data, loading, refetch, fetchMore} = useSeeFeed(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleEndReachedFetchMore = () => {
    if (loading || !data || !data.seeFeed.hasNextPage) {
      return;
    }
    fetchMore({
      variables: {
        input: {
          offset: data.seeFeed.posts.length,
        },
      },
    });
  };

  const handleClickNavigatePhoto = () =>
    navigation.navigate('stack', {screen: 'photo'});

  const handleClickNavigationProfile = (userId: number, username: string) =>
    navigation.navigate('stack', {
      screen: 'profile',
      params: {userId, username},
    });

  const handleClickNavigationLikes = (postId: number) =>
    navigation.navigate('stack', {screen: 'likes', params: {postId}});

  const handleClickNavigationComments = () =>
    navigation.navigate('stack', {screen: 'comments'});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.05}
        onEndReached={handleEndReachedFetchMore}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={data?.seeFeed.posts}
        keyExtractor={(post, index) => `feed-${post.id}-${index}`}
        renderItem={({item: post}) => (
          <PostItem
            post={post}
            handleClickNavigationProfile={() =>
              handleClickNavigationProfile(post.user.id, post.user.username)
            }
            handleClickNavigatePhoto={handleClickNavigatePhoto}
            handleClickNavigationLikes={() =>
              handleClickNavigationLikes(post.id)
            }
            handleClickNavigationComments={handleClickNavigationComments}
          />
        )}
      />
    </ScreenLayout>
  );
};
