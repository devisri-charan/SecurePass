chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ password: "" });
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    const headers = details.requestHeaders;
    headers.push({
      name: "Authorization",
      value: "Basic " + btoa("username:password"),
    });
    return { requestHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
