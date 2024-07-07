import gsap from 'gsap';

export default (domList: NodeListOf<Element>, toggleClass: string) => {
  domList.forEach((titleElement: HTMLElement) => {
    const hook = titleElement.getAttribute('data-hook') || '70%';
    gsap.timeline({
      scrollTrigger: {
        trigger: titleElement,
        start: 'top ' + hook,
        end: 'bottom -100%',
        toggleClass,
        // markers: true,
      },
    });
  });
}