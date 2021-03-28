export function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `https://api.bangdigi.net${url}`;
  }
  // Otherwise return full URL
  return url;
}

export function priceFormatting(price) {
  return price.toFixed(2);
}
