import navigationStore from "$lib/stores/navigationStore";

let distance = "100%";
let inX;
let outX;
let inY;
let outY;

navigationStore.subscribe(value => {
  // console.log(value);
  if (value.to > value.from) {

    inX = distance;

    outX = "-" + distance;

    inY = 0

    outY = 0

  } else if (value.to < value.from) {

    inX = "-" + distance;

    outX = distance;

    inY = 0

    outY = 0

  } else {

    inX = 0;

    outX = 0;

    inY = "-" + distance;

    outY = distance;

  }
})

const indur = 0.5;
const deldur = 0;
const outdur = 0.5;

export function slideFadeIn (node) {
  let tl = gsap.timeline({delay:deldur});
  // console.log('navStore:', navStore);
  tl.from(node,{duration:indur, x:inX, y:inY, transformOrigin:"50% 0", ease:"linear"},0);

  return {
    /* GSAP's duration is in seconds. Svelte's is in miliseconds */
    duration: (indur + deldur) * 1000,
    tick: t => {
      tl.play();
    }
  }
}

export function slideFadeOut (node) {
  let tl = gsap.timeline();
  // console.log('navStore:', navStore);
  tl.to(node,{duration:outdur, x:outX, y:outY, transformOrigin:"50% 0", ease:"linear"},0);

  return {
    duration: outdur * 1000,
    tick: t => {
      tl.play();
    }
  }
}