const imageModules = import.meta.glob('../../data/img/**/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const imageMap = {};

Object.entries(imageModules).forEach(([modulePath, imageUrl]) => {
  const normalizedPath = modulePath.replace('../../data/img/', '');
  imageMap[normalizedPath] = imageUrl;

  const fileName = normalizedPath.split('/').pop();
  imageMap[fileName] = imageUrl;
});

export function resolveImage(pathOrName, bucket) {
  if (!pathOrName) return '';

  const fileName = pathOrName.split('/').pop();
  const bucketKey = bucket ? `${bucket}/${fileName}` : '';

  return imageMap[bucketKey] || imageMap[pathOrName] || imageMap[fileName] || `/${pathOrName}`;
}
