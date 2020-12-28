gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from('.transition1', {
  opacity: 0,
  y: '-30%',
  duration: 1,
  ease: Power4.easeOut
}, '-=1')

tl.from('.landing-page-content', {
  y: '-30%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
})

tl.from('.stagger-1', {
  opacity: 0,
  y: '-50',
  stagger: .2,
  ease: Power4.easeOut,
  duration: 2
}, '-=1.5')

tl.from('.landing-page-svg', {
  opacity: 0,
  y: 100,
  ease: Power4.easeOut,
  duration: 1
}, '-=2')

gsap.from('.lp-design-anim', {
  stagger: .2,
  scale: .1,
  duration: 1,
  ease: Back.easeOut.config(1.7)
})


gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: 'top bottom',
  },
  x: -200,
  opacity: 0,
  duration: 1.2,
  stagger: .3
})

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .3
})

gsap.from('.transition4', {
  scrollTrigger: {
    trigger: '.transition4',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .5
})

gsap.from('.transition5', {
  scrollTrigger: {
    trigger: '.transition5',
    start: 'top bottom',
  },
  x: 200,
  opacity: 0,
  duration: 1.2,
  stagger: .3
})

