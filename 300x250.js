function injectScript(scripts, targetSelector) {
    let targetElements = document.querySelectorAll(targetSelector);
    for (let targetElement of targetElements) {
        for (let script of scripts) {
            let tagName = script.tag, innerContent = script.inner, newElement = document.createElement(tagName);
            newElement.innerHTML = innerContent;
            let attributes = script.attr;
            for (let attribute of attributes) {
                newElement.setAttribute(attribute.name, attribute.value);
            }
            targetElement.append(newElement);
        }
    }
}

function loadBannerPost() {
    injectScript([{
        "attr": [{"name": "type", "value": "text/javascript"}],
        "tag": "script",
        "inner": `
            atOptions = {
                'key': '31ea857d05687a492c2ff82c865610d6',
                'format': 'iframe',
                'height': 300,
                'width': 250,
                'params': {}
            };
        `
    }, {
        "attr": [
            {"name": "type", "value": "text/javascript"},
            {"name": "src", "value": "//trashyepochabsorbing.com/391a7c454c7632fa62a39c1549db1f6d/invoke.js"}
        ],
        "tag": "script",
        "inner": ""
    }], ".banner-post");
}

(async () => {
    let tryChecks = 0;
    while (document.querySelector(".banner-post") == null && tryChecks <= 3) {
        await new Promise((resolve) => {
            setTimeout(() => {
                tryChecks += 1;
                resolve();
            }, 1000);
        });
    }

    loadBannerPost();
})();

/* script membuat style agar iklan rata tengah (tidak perlu diganti) */
(() => {
    const el = document.createElement("style");
    el.innerText = `.banner-header, .banner-post {
        text-align: center;
        display: block;
    }`;
    document.querySelector("body").append(el);
})();
