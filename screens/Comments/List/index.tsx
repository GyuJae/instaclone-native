import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ISeeCommentsComment} from '../../../apollo';
import {colors} from '../../../themes';

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
  if (!comments) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={comments}
        keyExtractor={(comment, index) => `comment-${comment.id}-${index}`}
        renderItem={({item: comment}) => (
          <Text style={{color: colors.text}}>{comment.payload}</Text>
        )}
        refreshing={refreshing}
        onRefresh={handleRefetch}
      />
    </View>
  );
};
