let allowedUntil = 0;

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const dateNow = Date.now();
        if (now < allowedUntil) return { cancel: false };
        const allowedSites = ["chess.com", "lichess.org"];
        if (allowedSites.some(site => details.url.includes(site))) return { cancel: false };
        return { redirectURL: chrome.runtime.getURL("reminder.html") };
    }, { urls: ["<all_urls>"] }, ["blocking"]
);