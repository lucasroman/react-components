// Return image url for source
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' + person.imageId + 's.jpg'
  );
}