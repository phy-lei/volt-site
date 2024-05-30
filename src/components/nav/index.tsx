import { onMount, onCleanup, createSignal } from 'solid-js';
import ExpandButton from '../expand-button';
import Logo from '../logo';
import clsx from 'clsx';

const SCROLL_PERCENT = 1.5;

function getScrollPercentage() {
  // 获取当前滚动的位置
  const scrollTop = window.scrollY;
  // 计算整个文档的高度减去视口的高度，得到总的可滚动高度
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // 计算滚动的百分比
  return (scrollTop / scrollHeight) * 100;
}

const Nav = () => {
  const [transparent, setTransparent] = createSignal(true);

  onMount(() => {
    const scrollEvent = () => {
      if (getScrollPercentage() > SCROLL_PERCENT) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };
    scrollEvent();
    window.addEventListener('scroll', scrollEvent);
    onCleanup(() => {
      window.removeEventListener('scroll', scrollEvent);
    });
  });

  return (
    <nav
      class={clsx(
        'w-full h-72px sticky top-0 z-40 w-full py-4 transition-colors py-4',
        transparent()
          ? 'text-[hsl(var(--muted-foreground))] bg-transparent'
          : 'backdrop-blur-md text-[hsl(var(--foreground))] bg-[hsl(var(--background)/.75)]'
      )}
    >
      <div class="h-full flex items-center justify-between gap-4 px-8">
        <div class="flex">
          <Logo></Logo>
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
