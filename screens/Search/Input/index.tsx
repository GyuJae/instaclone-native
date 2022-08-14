import React from 'react';
import {LazyQueryExecFunction} from '@apollo/client';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, useWindowDimensions} from 'react-native';
import {ISearchPosts, ISearchPostsVariables} from '../../../apollo';
import {SearchInputStyle} from '../../../components';
import {colors} from '../../../themes';

interface IForm {
  keyword: string;
}

interface IProps {
  searchPostsQueryFn: LazyQueryExecFunction<
    ISearchPosts,
    ISearchPostsVariables
  >;
  loading: boolean;
}

export const Input: React.FC<IProps> = ({searchPostsQueryFn, loading}) => {
  const {width} = useWindowDimensions();
  const {control, handleSubmit} = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = ({keyword}) => {
    if (loading) {
      return;
    }
    searchPostsQueryFn({
      variables: {
        input: {
          keyword,
          offset: 0,
        },
      },
    });
  };
  return (
    <Controller
      control={control}
      name="keyword"
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={{...SearchInputStyle, width: width / 1.1}}
          placeholder="Search photos"
          autoCapitalize="none"
          returnKeyLabel="Search"
          returnKeyType="search"
          autoCorrect={false}
          placeholderTextColor={colors.gray}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          onSubmitEditing={handleSubmit(onSubmit)}
        />
      )}
    />
  );
};
