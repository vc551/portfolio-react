const cloudflareImageLoader = ({ src, width, quality }) => {
    if (!quality) {
      quality = 75
    }
    return `https://image-handler.vc551.workers.dev?width=${width}&quality=${quality}&image=https://vc551.com${src}`
  }