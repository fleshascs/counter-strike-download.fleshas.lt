export function buildBreadcrumbs(title: string, url: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: process.env.domain + url
      }
    ]
  });
}
