export const getImageUrl = (url: string | undefined) => {
  if (process.env.NEXT_PUBLIC_IMAGE_HOST && url && url[0] === '/') {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  if (url) {
    return url
  }

  return null
}
