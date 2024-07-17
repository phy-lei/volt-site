import { createSignal } from 'solid-js'
import Button from '@/components/button'

function LoginButton() {
  const [isLoading, setIsLoading] = createSignal(false)
  const signInHandler = async () => {
    setIsLoading(true)
    const payload = {
      email: (document.getElementById('user-input') as HTMLInputElement)?.value ?? '',
      password: (document.getElementById('password-input') as HTMLInputElement)?.value ?? '',
    }
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const res = await response.json()
    if (response.status === 200) {
      window.location.href = '/kiana'
      window.localStorage.setItem('token', res.token)
    }
  }
  return (
    <Button
      isLoading={isLoading()}
      class="w-100%"
      onClick={signInHandler}
      size="lg"
    >
      {isLoading()
        ? null
        : (
            <div class="i-carbon:logo-github mr-2 h-5 w-5" />
          )}
      登录
    </Button>
  )
};

export default LoginButton
