import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ILoggedOutNavigatorParamList} from '../../navigators';
import {TextInput, View, ViewStyle} from 'react-native';
import {AuthButton, AuthLayout, FormError, InputStyle} from '../../components';
import {spacing} from '../../themes';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

const Wrapper: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  padding: spacing.small,
  width: '100%',
};

interface IForm {
  email: string;
  password: string;
}

export const Login: React.FC<
  StackScreenProps<ILoggedOutNavigatorParamList, 'login'>
> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const emailRef = React.createRef<TextInput>();
  const passwordRef = React.createRef<TextInput>();

  const onNext = (nextRef: React.RefObject<TextInput>) => {
    nextRef.current?.focus();
  };
  const onSubmit: SubmitHandler<IForm> = input => {
    console.log(input);
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
              onSubmitEditing={() => onNext(passwordRef)}
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
          text="Log In"
          onPress={handleSubmit(onSubmit)}
          loading
        />
      </View>
    </AuthLayout>
  );
};
