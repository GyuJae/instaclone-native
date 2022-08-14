import React from 'react';
import {FlatList, View} from 'react-native';
import {ISeeCommentsComment} from '../../../apollo';
import {Item} from './Item';

interface IProps {
  comments?: ISeeCommentsComment[];
  handleRefetch: () => void;
  refreshing: boolean;
}

export const List: React.FC<IProps> = ({
  comments,
  handleRefetch,
  refreshing,
}) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={comments}
        keyExtractor={(comment, index) => `comment-${comment.id}-${index}`}
        renderItem={({item: comment}) => <Item comment={comment} />}
        refreshing={refreshing}
        onRefresh={handleRefetch}
      />
    </View>
  );
};
