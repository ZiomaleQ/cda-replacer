function getFile(url) {
  var x = document.querySelector(`#mediaplayer${getID(url)}`)
  return JSON.parse(x.attributes.player_data.value).video.file
}

function getID(url) {
  var rawID = new URL(url).pathname
  return rawID.split("/")[2]
}


async function replacePlayer() {
  document.querySelector(".pb-player-content").innerHTML = `<video width="100%" height="100%" controls>
  <source src="${finalResult(getFile(this.location.href))}" type="video/mp4">
</video>`
}

const getFileType = (fileName) => {
  if (fileName.endsWith('.cda.mp4')) {
    return '.mp4'
  }
  if (fileName.endsWith('.2cda.pl') || fileName.endsWith('.3cda.pl')) {
    return '.cda.pl'
  }
  return null
}

const addUpstream = (fileName) => {
  const fileType = getFileType(fileName)
  if (!fileType) {
    return null
  }

  if (fileName.indexOf('/upstream') !== -1) {
    return `https://${fileName.replace('/upstream', `.${fileType}/upstream`)}`
  }
  return `https://${fileName}.${fileType}`
}

const processString = (input) => {
  const decoded = decodeURIComponent(input)
  const encrypted = decoded.replace(/[a-zA-Z]/g, (char) => {
    const charCode = char.charCodeAt(0) + 13
    return String.fromCharCode(
      charCode <= 90 || charCode > 122 ? charCode - 26 : charCode
    )
  })

  const cleaned = encrypted
    .replace(/_XDDD/, '')
    .replace(/_CDA/, '')
    .replace(/_ADC/, '')
    .replace(/_CXD/, '')
    .replace(/_QWE/, '')
    .replace(/_Q5/, '')
    .replace(/_IKSDE/, '')

  return addUpstream(cleaned)
}

const finalResult = (input) => {
  const encrypted = processString(input)
  return encrypted ? encrypted : null
}

if (this.location.href.indexOf("video") != -1 || this.location.href.indexOf("ebd") != -1) replacePlayer()