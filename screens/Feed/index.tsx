import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList} from 'react-native';
import {useSeeFeed} from '../../apollo/queries/seeFeed.query';
import ScreenLayout from '../../components/ScreenLayout';
import {PostItem} from '../../components';

type FeedScreenProps = NativeStackScreenProps<any, 'feed'>;

export const Feed = ({navigation}: FeedScreenProps) => {
  const {data, loading} = useSeeFeed(null);
  const handleClickNavigatePhoto = () =>
    navigation.navigate('stack', {screen: 'photo', params: {photoId: 1}});

  const handleClickNavigationProfile = () =>
    navigation.navigate('stack', {screen: 'profile', params: {userId: 1}});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed.posts}
        keyExtractor={post => `feed-${post.id}`}
        renderItem={post => (
          <PostItem
            post={post.item}
            handleClickNavigationProfile={handleClickNavigationProfile}
            handleClickNavigatePhoto={handleClickNavigatePhoto}
          />
        )}
      />
    </ScreenLayout>
  );
};
