/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormValue } from '../../Type'
import apis from '../../shared/Apis'

function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormValue>()

  const onSubmitHandler: SubmitHandler<LoginFormValue> = async data => {
    const response = await apis.SigninAX(data)
    if (response.status === 200) {
      window.localStorage.setItem(
        'Access_Token',
        response.headers.authorization
      )
    }
  }

  return (
    <>
      <h2>BeePoo Logo</h2>
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
          <label htmlFor="userEmail">
            Email Address
            <input
              id="userEmail"
              type="userEmail"
              placeholder="email@email.com"
              {...register('userEmail', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '이메일 형식에 맞지 않습니다.',
                },
              })}
            />
          </label>
          <div>
            {errors.userEmail && (
              <small role="alert">{errors.userEmail.message}</small>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="userPassword">
            Password
            <input
              id="userPassword"
              type="userPassword"
              placeholder="********"
              {...register('userPassword', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 3,
                  message: '8자리 이상 비밀번호를 사용하세요.',
                },
              })}
            />
          </label>

          <div>
            {errors.userPassword && (
              <small role="alert">{errors.userPassword.message}</small>
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

export default SignInPage
