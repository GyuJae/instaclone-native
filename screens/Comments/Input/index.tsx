import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, View, ViewStyle} from 'react-native';
import {useCreateComment} from '../../../apollo';
import {DismissKeyboard, InputStyle} from '../../../components';
import {colors} from '../../../themes';

interface IProps {
  postId: number;
  handleRefetch: () => void;
}

interface IForm {
  payload: string;
}

const Container: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

export const Input: React.FC<IProps> = ({postId, handleRefetch}) => {
  const {createCommentMutate, loading} = useCreateComment();
  const {control, handleSubmit, setValue} = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = ({payload}) => {
    if (loading) {
      return;
    }
    createCommentMutate({
      variables: {
        input: {
          postId,
          payload,
        },
      },
      onCompleted: () => {
        handleRefetch();
        setValue('payload', '');
      },
    });
  };

  return (
    <DismissKeyboard>
      <View style={Container}>
        <Controller
          control={control}
          name="payload"
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={InputStyle}
              placeholder="Write a comment"
              autoCapitalize="none"
              returnKeyLabel="Comment"
              returnKeyType="done"
              autoCorrect={false}
              placeholderTextColor={colors.gray}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
        />
      </View>
    </DismissKeyboard>
  );
};
