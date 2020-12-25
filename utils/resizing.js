export function resizeImage(image, option) {
  if (!image.filename) {
    return null;
  }

  const imageService = '//img2.storyblok.com/';
  const imageUrl = image.filename || image;

  const path = imageUrl.replace('https://a.storyblok.com', '');

  return imageService + option + path;
}
