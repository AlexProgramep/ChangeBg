let blackColor = document.getElementById('blackBg');

let lightColor = document.getElementById('lightBg');

document.getElementById("blackBg").style.display = "none";

if(blackColor != null) {
  blackColor.onclick = function(el) {
    let colorBg = '#333';
    let colorText = '#fff';
    document.getElementById("blackBg").style.display = "none";
    document.getElementById("lightBg").style.display = "inline";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + colorBg + '";document.body.style.color = "' + colorText + '";'}
      );
    })
  }
}

if(lightColor != null) {
  lightColor.onclick = function(el) {
    let colorBg = '#fff';
    let colorText = '#333';
    document.getElementById("lightBg").style.display = "none";
    document.getElementById("blackBg").style.display = "inline";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + colorBg + '";document.body.style.color = "' + colorText + '";'}
      );
    })
  }
}

