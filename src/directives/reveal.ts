import type { ObjectDirective } from 'vue';

type RevealOrigin = 'up' | 'left' | 'right' | 'scale';

interface RevealOptions {
  delay?: number;
  origin?: RevealOrigin;
}

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>();

const resolveOptions = (
  value: RevealOrigin | RevealOptions | undefined
): Required<RevealOptions> => {
  if (!value) {
    return {
      delay: 0,
      origin: 'up'
    };
  }

  if (typeof value === 'string') {
    return {
      delay: 0,
      origin: value
    };
  }

  return {
    delay: value.delay ?? 0,
    origin: value.origin ?? 'up'
  };
};

export const revealDirective: ObjectDirective<
  HTMLElement,
  RevealOrigin | RevealOptions | undefined
> = {
  mounted(el, binding) {
    const { delay, origin } = resolveOptions(binding.value);

    el.classList.add('reveal');
    el.dataset.revealOrigin = origin;

    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        el.classList.add('is-visible');
        observer.unobserve(el);
        observer.disconnect();
        observerMap.delete(el);
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(el);
    observerMap.set(el, observer);
  },
  unmounted(el) {
    observerMap.get(el)?.disconnect();
    observerMap.delete(el);
  }
};
