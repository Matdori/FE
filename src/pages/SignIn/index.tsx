/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormValue } from '../../Type'
import Apis from '../../shared/Apis'

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormValue>()

  const onSubmitHandler: SubmitHandler<LoginFormValue> = data => {
    Apis.SigninAX(data)
    console.log(data)
  }

  return (
    <>
      <h2>BooPoo Logo</h2>
      <h3>Login</h3>
      <p>이메일이 등록되어 있지 않다면,</p>
      <p>관리자에게 이메일 등록을 요청하세요.</p>

      <form
        onSubmit={handleSubmit(async data => {
          await new Promise(r => setTimeout(r, 1000))
          onSubmitHandler(data)
        })}
      >
        <div>
          <label htmlFor="email">
            Email Address
            <input
              id="email"
              type="email"
              placeholder="email@email.com"
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '이메일 형식에 맞지 않습니다.',
                },
              })}
            />
          </label>
          <div>
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </div>
        </div>

        <div>
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              placeholder="********"
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요.',
                },
              })}
            />
          </label>

          <div>
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
    </>
  )
}

export default SignIn
