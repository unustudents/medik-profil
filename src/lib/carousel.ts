import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

export function initCarousel(containerClass: string) {
    const emblaNode = document.querySelector(containerClass);
    if (!emblaNode) return;

    const viewportNode = emblaNode.querySelector('.embla__viewport') as HTMLElement;
    if (!viewportNode) return;

    // Cari tombol di parent container (untuk tombol yang di luar carousel)
    const parentNode = emblaNode.parentElement;
    const prevButton = parentNode?.querySelector('.embla__prev') as HTMLButtonElement;
    const nextButton = parentNode?.querySelector('.embla__next') as HTMLButtonElement;

    const emblaApi = EmblaCarousel(viewportNode, { loop: false, align: 'start' }, [
        Autoplay({ delay: 7000, stopOnInteraction: false }),
    ]);

    prevButton?.addEventListener('click', () => emblaApi.scrollPrev());
    nextButton?.addEventListener('click', () => emblaApi.scrollNext());

    emblaApi.plugins().autoplay?.play();

    return emblaApi;
}
