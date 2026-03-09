chrome.sidePanel
  .setOptions({
    path: "sidepanel.html",
    enabled: true
  })
  .catch((error: Error) => console.error(error));

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error: Error) => console.error(error));