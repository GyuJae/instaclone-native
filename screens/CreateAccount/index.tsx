import React, {useRef, useState} from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {colors, spacing} from '../../themes';
import {AuthButton, AuthLayout, FormError, InputStyle} from '../../components';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useCreateAccount} from '../../apollo';

const Wrapper: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  padding: spacing.small,
  width: '100%',
};

interface IForm {
  email: string;
  username: string;
  password: string;
}

export const CreateAccount: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'createAccount'>
> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const [formError, setFormError] = useState<string | null>(null);
  const emailRef = React.createRef<TextInput>();
  const usernameRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();

  const {createAccountMutate, loading} = useCreateAccount();

  const onNext = (nextRef: React.RefObject<TextInput>) => {
    nextRef.current?.focus();
  };

  const onSubmit: SubmitHandler<IForm> = input => {
    if (loading) return;
    createAccountMutate({
      variables: {
        input,
      },
      onCompleted: ({createAccount: {ok, error}}) => {
        if (!ok && error) setFormError(error);
        if (ok) navigation.navigate('login');
      },
    });
  };

  return (
    <AuthLayout>
      <View style={Wrapper}>
        <Controller
          control={control}
          rules={{
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            required: true,
          }}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              ref={emailRef}
              style={InputStyle}
              placeholder="Email"
              placeholderTextColor="gray"
              returnKeyType="next"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize="none"
              onSubmitEditing={() => onNext(usernameRef)}
            />
          )}
        />
        <>
          <FormError
            inView={errors.email?.type === 'pattern'}
            text="This is not email pattern."
          />
          <FormError
            inView={errors.email?.type === 'required'}
            text="Email is required."
          />
        </>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 15,
          }}
          name="username"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={InputStyle}
              ref={usernameRef}
              placeholder="Username"
              placeholderTextColor="gray"
              returnKeyType="next"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmitEditing={() => onNext(passwordRef)}
            />
          )}
        />
        <>
          <FormError
            inView={errors.username?.type === 'required'}
            text="Username is required."
          />
          <FormError
            inView={errors.username?.type === 'maxLength'}
            text="Username max length is 15."
          />
        </>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              ref={passwordRef}
              style={InputStyle}
              placeholder="Password"
              placeholderTextColor="gray"
              returnKeyType="next"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
        />
        <>
          <FormError
            inView={errors.password?.type === 'required'}
            text="Password is required."
          />
          <FormError
            inView={errors.password?.type === 'minLength'}
            text="Password min length is 8."
          />
        </>
        <AuthButton
          disabled={!isValid}
          text="Create Account"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
        <FormError inView={!!formError} text={formError} />
      </View>
    </AuthLayout>
  );
};
