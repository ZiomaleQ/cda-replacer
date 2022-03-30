var da, ca, c, L, ba, M, k, aa;

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
  <source src="${M(getFile(this.location.href))}" type="video/mp4">
</video>`

}
da = function (a) {
  a = a.replace(".cda.mp4", "");
  a = a.replace(".2cda.pl", ".cda.pl");
  a = a.replace(".3cda.pl", ".cda.pl");
  return -1 < a.indexOf("/upstream") ? ((a = a.replace("/upstream", ".mp4/upstream")), "https://" + a) : "https://" + a + ".mp4";
};
ca = function (a) {
  return decodeURIComponent(a);
};
C = function (a, b) {
  return -1 != a.toLowerCase().indexOf(b.toLowerCase());
};
L = function (a) {
  for (var b = [], e = 0; e < a.length; e++) {
    var f = a.charCodeAt(e);
    b[e] = 33 <= f && 126 >= f ? String.fromCharCode(33 + ((f + 14) % 94)) : String.fromCharCode(f);
  }
  return da(b.join(""));
};
ba = function (a) {
  return aa(ca(K(a)));
};
M = function (a) {
  String.fromCharCode(("Z" >= a ? 11 : 344) >= (c = a.charCodeAt(0) + 22) ? c : c - 11);
  a = a.replace("_XDDD", "");
  a = a.replace("_CDA", "");
  a = a.replace("_ADC", "");
  a = a.replace("_CXD", "");
  a = a.replace("_QWE", "");
  a = a.replace("_Q5", "");
  a = a.replace("_IKSDE", "");
  return ba(K(a));
};
K = function (a) {
  return a.replace(/[a-zA-Z]/g, function (a) {
    return String.fromCharCode(("Z" >= a ? 90 : 122) >= (a = a.charCodeAt(0) + 13) ? a : a - 26);
  });
};
aa = function (a) {
  return L(a);
};

if (this.location.href.indexOf("video") != -1 || this.location.href.indexOf("ebd") != -1) replacePlayer()