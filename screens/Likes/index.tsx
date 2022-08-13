import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useSeePostLikes} from '../../apollo';
import {UserRow} from '../../components';
import ScreenLayout from '../../components/ScreenLayout';
import {IStackNavigatorParamList} from '../../navigators/LoggedInNav/Stack';

export const Likes: React.FC<
  StackScreenProps<IStackNavigatorParamList, 'likes'>
> = ({
  route: {
    params: {postId},
  },
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {data, loading, refetch, fetchMore} = useSeePostLikes(postId, 0);
  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleEndReachedFetchMore = () => {
    if (loading || !data || !data.seePostLikes.hasNextPage) {
      return;
    }
    fetchMore({
      variables: {
        input: {
          offset: data.seePostLikes.users.length,
        },
      },
    });
  };

  const handlePressNavigateProfile = (userId: number, username: string) =>
    navigation.navigate('profile', {userId, username});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.05}
        onEndReached={handleEndReachedFetchMore}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={data?.seePostLikes.users}
        keyExtractor={(item, index) => `Like-User-${item.id}-${index}`}
        renderItem={({item: user}) => (
          <UserRow
            user={user}
            handlePressNavigateProfile={() =>
              handlePressNavigateProfile(user.id, user.username)
            }
          />
        )}
      />
    </ScreenLayout>
  );
};
