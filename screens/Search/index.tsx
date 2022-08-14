import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useSearchPosts} from '../../apollo/queries/searchPosts.query';
import {DismissKeyboard} from '../../components';
import {colors} from '../../themes';
import {Files} from './Files';
import {Input} from './Input';
import {Loading} from './Loading';
import {NotCalled} from './NotCalled';
import {NotFound} from './NotFound';

const Wrapper: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: 'center',
  alignItems: 'center',
};

export const Search: React.FC<NativeStackScreenProps<any, 'search'>> = ({
  navigation,
}) => {
  const {loading, called, data, searchPostsQueryFn} = useSearchPosts();

  const handleNavigationPost = (postId: number) => {
    navigation.navigate('stack', {
      screen: 'photo',
      params: {
        postId,
      },
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Input loading={loading} searchPostsQueryFn={searchPostsQueryFn} />
      ),
    });
  }, [loading, navigation, searchPostsQueryFn]);

  return (
    <DismissKeyboard>
      <View style={Wrapper}>
        <NotCalled inView={!called} />
        <Loading inView={loading} />
        <NotFound inView={!!(data && data.searchPosts.posts.length === 0)} />
        <Files
          inView={!!(data && data.searchPosts.posts.length > 0)}
          posts={data?.searchPosts.posts}
          handleNavigationPost={handleNavigationPost}
        />
      </View>
    </DismissKeyboard>
  );
};
