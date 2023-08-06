function addDownloadLink() {
  const link = document.createElement("a")
  link.href = document.querySelector(".pb-video-player").src
  link.innerHTML = "Pobierz"
  link.style = "padding: 10px; background-color: gray; color: white;"
  document.getElementsByClassName("title-name")[0].appendChild(link)
}

const that = this

function disableAdds() {
  document.getElementsByClassName("pb-video-ad-container")[0].remove()

  vidID = that.location.pathname.split('/')[2]

  const mediaPlayer = document.querySelector(`#mediaplayer${vidID}`)

  const json = JSON.parse(mediaPlayer.attributes.player_data.value)

  json.premium = true

  mediaPlayer.attributes.player_data.value = JSON.stringify(json)
}

if ((this.location.href.indexOf("video") != -1 || this.location.href.indexOf("ebd") != -1) && this.location.hostname.indexOf('.cda.') != -1) {
  disableAdds()

  window.onload = function () {
    addDownloadLink()
  }
}