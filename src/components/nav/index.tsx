import { onMount, onCleanup } from 'solid-js';
import ExpandButton from '../expand-button';
const Nav = () => {
  onMount(() => {
    const scrollEvent = () => {
      // @TODO 添加nav border 及背景色
      console.log(
        '%c [ xxx ]',
        'font-size:13px; background:pink; color:#bf2c9f;',
        123
      );
    };
    window.addEventListener('scroll', scrollEvent);
    onCleanup(() => {
      window.removeEventListener('scroll', scrollEvent);
    });
  });

  return (
    <nav class="w-full h-72px sticky top-0 z-40 w-full py-4 transition-colors backdrop-blur-md text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
      <div class="h-full flex items-center justify-between">
        <div class="flex">
          <h1>Volt+</h1>
          <h1>icon</h1>
        </div>
        <div class="flex items-center">
          <div class="flex gap-4 <md:hidden">
            <a href="">光伏介绍</a>
            <a href="">工商业解决方案</a>
            <a href="">成功案例</a>
            <a href="">关于 volt +</a>
            <a href="">联系我们</a>
          </div>
          <div class="md:hidden">
            <ExpandButton
              onChange={(flag) => {
                console.log(flag);
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
