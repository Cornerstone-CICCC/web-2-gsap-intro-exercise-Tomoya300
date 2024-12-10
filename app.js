const containerWidth = window.innerWidth
const containerHeight = window.innerHeight
const boxWidth = 200;

const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5})
tl.from(".red", {x: "-200px", y: "-200px", ease: "power1.in", duration: 0.75})
tl.from(".green", {x: "200px", y: "-200px", ease: "power1.in", duration: 0.75}, "-=0.25")
tl.from(".blue", {x: "200px", y: "200px", ease: "power1.in", duration: 0.75}, "-=0.25")
tl.from(".yellow", {x: "-200px", y: "200px", ease: "power1.in", duration: 0.75}, "-=0.25")
tl.to(".box", {borderRadius: "50%", duration: 1})
tl.to(".red", {x: containerWidth - boxWidth, backgroundColor: "green", duration: 1}, "<")
tl.to(".green", {y: containerHeight - boxWidth, backgroundColor: "blue", duration: 1}, "<")
tl.to(".blue", {x: -containerWidth + boxWidth, backgroundColor: "yellow", duration: 1}, "<")
tl.to(".yellow", {y: -containerHeight + boxWidth, backgroundColor: "red", duration: 1}, "<")
tl.to(".red", {x: "100vw", duration: 1})
tl.to(".green", {x: 200, duration: 1}, "<")
tl.to(".blue", {x: "-100vw", duration: 1}, "<")
tl.to(".yellow", {x: -200, duration: 1}, "<")

console.log(`Total duration of one loop: ${tl.duration()} seconds`)