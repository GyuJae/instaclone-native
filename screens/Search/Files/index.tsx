import React, {useMemo} from 'react';
import {FlatList, useWindowDimensions, View, ViewStyle} from 'react-native';
import {ISearchPostsPost} from '../../../apollo';
import {FileItem} from './FileItem';

interface IProps {
  inView: boolean;
  posts?: ISearchPostsPost[];
  handleNavigationPost: (postId: number) => void;
}

const NUM_COLUMNS = 4;

const Wrapper: ViewStyle = {};

export const Files: React.FC<IProps> = ({
  inView,
  posts,
  handleNavigationPost,
}) => {
  const {width} = useWindowDimensions();

  const postList = useMemo(() => {
    return (
      <FlatList
        data={posts}
        keyExtractor={(post, index) => `search-post-${post.id}-${index}`}
        renderItem={({item: post}) => (
          <FileItem
            post={post}
            numColumns={NUM_COLUMNS}
            width={width}
            handleNavigationPost={handleNavigationPost}
          />
        )}
        numColumns={NUM_COLUMNS}
        style={{width}}
      />
    );
  }, [handleNavigationPost, posts, width]);

  if (!inView || !posts) {
    return null;
  }

  return <View style={Wrapper}>{postList}</View>;
};
