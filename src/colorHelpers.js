import chroma from 'chroma-js';
import { LEVELS } from './constants';
const levels = LEVELS;

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for(let level of levels) {
    newPalette.colors[level] = [];
  }
  for(let color of starterPalette.colors) {
    // let scale = generateScale(color.color, 10).reverse();
    let scale = generateScale(color.color, 10)
    for(let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}

function getRange(hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function generateScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors);
}

export { generatePalette };