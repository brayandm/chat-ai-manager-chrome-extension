console.log("This is a popup!");

document
    .getElementById("whatsapp-web-link")
    .addEventListener("click", function () {
        chrome.tabs.create({ url: "https://web.whatsapp.com/" });
    });
