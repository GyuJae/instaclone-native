import React from 'react';
import {Image, ImageStyle, TouchableOpacity} from 'react-native';
import {ISearchPostsPost} from '../../../../apollo';

interface IProps {
  post: ISearchPostsPost;
  numColumns: number;
  width: number;
  handleNavigationPost: (postId: number) => void;
}

const FileStyle: ImageStyle = {
  height: 100,
};

export const FileItem: React.FC<IProps> = ({
  post,
  numColumns,
  width,
  handleNavigationPost,
}) => {
  return (
    <TouchableOpacity onPress={() => handleNavigationPost(post.id)}>
      <Image
        source={{uri: post.files[0].posterPath}}
        style={{...FileStyle, width: width / numColumns}}
      />
    </TouchableOpacity>
  );
};
