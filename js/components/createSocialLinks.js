function createSocialLinks(div, arr) {

  const socialLinks = document.createElement("div")
  socialLinks.className = "social-links"
  
  const fbLink = document.createElement('a');
  const imdbLink = document.createElement('a');
  imdbLink.className = "imdb";
  // Font Awesome icon is too small so just add text as the link
  const imdbLinkText = document.createTextNode('IMDb')
  const instaLink = document.createElement('a');
  const twitLink = document.createElement('a');
  if (arr[1] !== null) {
    imdbLink.setAttribute("href", `https://www.imdb.com/title/${arr[1]}`);
    imdbLink.setAttribute("target", "_blank")
    imdbLink.append(imdbLinkText)
    socialLinks.append(imdbLink)
  }
  if (arr[0] !== null) {
    fbLink.setAttribute("href", `https://www.facebook.com/${arr[0]}`);
    fbLink.setAttribute("target", "_blank")
    const icon = document.createElement('i');
    icon.className = "fab fa-facebook-f";
    fbLink.append(icon)
    socialLinks.append(fbLink)
  }
  if (arr[2] !== null) {
    instaLink.setAttribute("href", `https://www.instagram.com/${arr[2]}`);
    instaLink.setAttribute("target", "_blank")
    const icon = document.createElement('i');
    icon.className = "fab fa-instagram";
    instaLink.append(icon)
    socialLinks.append(instaLink)
  }
  if (arr[3] !== null) {
    twitLink.setAttribute("href", `https://www.twitter.com/${arr[3]}`);
    twitLink.setAttribute("target", "_blank")
    const icon = document.createElement('i');
    icon.className = "fab fa-twitter";
    twitLink.append(icon)
    socialLinks.append(twitLink)
  }
  div.append(socialLinks)
}

export default createSocialLinks;