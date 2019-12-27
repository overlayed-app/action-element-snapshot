import imgur from 'imgur'

/**
 * Uploads a base64 image to imgur
 *
 * @param {String} image the base64 encoded image
 * @returns {String} the link to the uploaded image
 */
export default async function(image: string) {
  const res = await imgur.uploadBase64(image)
  return res.data.link
}
