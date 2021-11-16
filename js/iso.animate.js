const select = (el, cb) => {
  document.querySelectorAll(el).forEach(cb);
};
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.classList.add("iso-animate-active");
    }
  });
});
select(".iso-animate", (el) => {
  if (!el.dataset.isoAnimate) el.dataset.isoAnimate = "fade";
  if (!el.dataset.isoAnimateOrigin) el.dataset.isoAnimateOrigin = "left";
  if (!el.dataset.isoAnimateDuration) el.dataset.isoAnimateDuration = 350;
  if (!el.dataset.isoAnimateDelay) el.dataset.isoAnimateDelay = 0;
  let { isoAnimate, isoAnimateOrigin, isoAnimateDuration, isoAnimateDelay } =
    el.dataset;
  isoAnimateDuration = Number(isoAnimateDuration);
  isoAnimateDelay = Number(isoAnimateDelay);
  el.style.setProperty("--duration", `${isoAnimateDuration}ms`);
  el.style.setProperty("--delay", `${isoAnimateDelay}ms`);
  el.parentElement.style.overflow = "hidden";
  observer.observe(el);
  console.log(isoAnimate, isoAnimateOrigin);
});
