export const schema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': ['VideoGame', 'SoftwareApplication'],
  name: 'Counter-Strike 1.6',
  image: require('./images/header.jpg?webp'),
  author: {
    '@type': 'Organization',
    name: 'Valve',
    url: 'https://www.valvesoftware.com'
  },
  publisher: 'Valve',
  genre: ['Action (Shooter)', '3D', '1st Person'],
  operatingSystem: 'Windows',
  applicationCategory: 'GameApplication',
  softwareVersion: '1.6',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    ratingCount: '2956'
  },
  offers: {
    '@type': 'Offer',
    price: '0'
  }
});
