import { createSignal } from 'solid-js';
import Button from '@/components/button';

const LoginButton = () => {
  const [isLoading, setIsLoading] = createSignal(false);
  const signInHandler = async () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/kiana';
    }, 1000);
  };
  return (
    <Button
      isLoading={isLoading()}
      class="w-100%"
      onClick={signInHandler}
      size="lg"
    >
      {isLoading() ? null : (
        <div class="i-carbon:logo-github mr-2 h-5 w-5"></div>
      )}
      登录
    </Button>
  );
};

export default LoginButton;
