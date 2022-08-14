import React from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useDeleteComment} from '../../../../../apollo';
import {colors} from '../../../../../themes';

interface IProps {
  inView: boolean;
  commentId: number;
  handleRefetch: () => void;
}

const Container: ViewStyle = {
  width: '85%',
  flexDirection: 'row',
  marginTop: 7,
};

const Delete: TextStyle = {
  color: colors.lightGray,
  fontWeight: '900',
};

export const IsMe: React.FC<IProps> = ({inView, commentId, handleRefetch}) => {
  const {deleteCommentMutate} = useDeleteComment();

  const handlePressDelete = () => {
    deleteCommentMutate({
      variables: {
        input: {
          commentId,
        },
      },
      onCompleted: () => {
        handleRefetch();
      },
    });
  };

  if (!inView) {
    return null;
  }

  return (
    <View style={Container}>
      <TouchableOpacity onPress={handlePressDelete}>
        <Text style={Delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
