import sizeOf from 'image-size';

export enum DimensionDominant {
  SQUARE = 'square',
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export const getDominant = (img: Buffer): DimensionDominant => {
  const {width, height} = sizeOf(img);

  if (!width || !height) {
    throw new Error('dimension error')
  }

  if (width === height) {
    return DimensionDominant.SQUARE;
  }

  if (width > height) {
    return DimensionDominant.HORIZONTAL;
  }

  return DimensionDominant.VERTICAL;
}
