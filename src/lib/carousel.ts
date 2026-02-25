import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

// export function initCarousel(containerClass: string) {
export function initCarousel(containerClass: string | HTMLElement) {
  // const emblaNode = document.querySelector(containerClass);
  // Dukung string selector maupun element langsung
  const emblaNode =
    typeof containerClass === "string"
      ? document.querySelector(containerClass)
      : containerClass;

  if (!emblaNode) return;

  // 2. Cegah inisialisasi ganda (Double Init)
  if (emblaNode.hasAttribute("data-initialized")) return;

  const viewportNode = emblaNode.querySelector(
    ".embla__viewport"
  ) as HTMLElement;
  if (!viewportNode) return;

  // Cari tombol di parent container (untuk tombol yang di luar carousel)
  const parentNode = emblaNode.parentElement;
  const prevButton = parentNode?.querySelector(
    ".embla__prev"
  ) as HTMLButtonElement;
  const nextButton = parentNode?.querySelector(
    ".embla__next"
  ) as HTMLButtonElement;

  const emblaApi = EmblaCarousel(
    viewportNode,
    { loop: false, align: "start" },
    [Autoplay({ delay: 7000, stopOnInteraction: false })]
  );

  prevButton?.addEventListener("click", () => emblaApi.scrollPrev());
  nextButton?.addEventListener("click", () => emblaApi.scrollNext());

  emblaApi.plugins().autoplay?.play();

  // 3. Beri stempel kalau carousel ini sudah jalan
  emblaNode.setAttribute("data-initialized", "true");

  return emblaApi;
}

export function initHeroCarousel(
  // containerClass: string,
  containerClass: string | HTMLElement,
  options: { delay?: number } = {}
) {
  // const emblaNode = document.querySelector(containerClass);
  // Dukung string selector maupun element langsung
  const emblaNode =
    typeof containerClass === "string"
      ? document.querySelector(containerClass)
      : containerClass;

  if (!emblaNode) return;

  // 2. Cegah inisialisasi ganda (Double Init)
  if (emblaNode.hasAttribute("data-initialized")) return;

  const viewportNode = emblaNode.querySelector(
    ".embla__viewport"
  ) as HTMLElement;
  if (!viewportNode) return;

  const indicators = emblaNode.querySelectorAll("[data-hero-indicator]");

  const emblaApi = EmblaCarousel(viewportNode, { loop: true }, [
    Autoplay({ delay: options.delay || 5000, stopOnInteraction: false }),
  ]);

  const updateIndicators = () => {
    const selectedIndex = emblaApi.selectedScrollSnap();
    indicators.forEach((ind, index) => {
      if (index === selectedIndex) {
        ind.classList.remove("bg-transparent", "border-2", "border-white");
        ind.classList.add("bg-white", "scale-125");
      } else {
        ind.classList.remove("bg-white", "scale-125");
        ind.classList.add("bg-transparent", "border-2", "border-white");
      }
    });
  };

  emblaApi.on("select", updateIndicators);
  updateIndicators();

  indicators.forEach((ind, index) => {
    ind.addEventListener("click", () => emblaApi.scrollTo(index));
  });

  return emblaApi;
}
