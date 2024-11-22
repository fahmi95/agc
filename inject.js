function injectScript(scripts, targetSelector) {
    document.querySelectorAll(targetSelector).forEach(targetElement => {
        scripts.forEach(script => {
            const newElement = document.createElement(script.tag);
            if (script.inner) newElement.innerHTML = script.inner;
            script.attr.forEach(attribute => {
                newElement.setAttribute(attribute.name, attribute.value);
            });
            targetElement.appendChild(newElement);
        });
    });
}

async function loadBannerHeader() {
    const scripts = [
        {
            "attr": [{"name": "type", "value": "text/javascript"}],
            "tag": "script",
            "inner": `
                atOptions = {
                    'key': '31ea857d05687a492c2ff82c865610d6',
                    'format': 'iframe',
                    'height': 90,
                    'width': 728,
                    'params': {}
                };
            `
        },
        {
            "attr": [
                {"name": "type", "value": "text/javascript"},
                {"name": "src", "value": "//trashyepochabsorbing.com/31ea857d05687a492c2ff82c865610d6/invoke.js"}
            ],
            "tag": "script",
            "inner": ""
        }
    ];
    injectScript(scripts, ".banner-header");
    await new Promise(resolve => setTimeout(resolve, 1000)); // jeda sebelum memuat iklan berikutnya
}

async function loadBannerPost() {
    const scripts = [
        {
            "attr": [{"name": "type", "value": "text/javascript"}],
            "tag": "script",
            "inner": `
                atOptions = {
                    'key': '391a7c454c7632fa62a39c1549db1f6d',
                    'format': 'iframe',
                    'height': 250,
                    'width': 300,
                    'params': {}
                };
            `
        },
        {
            "attr": [
                {"name": "type", "value": "text/javascript"},
                {"name": "src", "value": "//trashyepochabsorbing.com/391a7c454c7632fa62a39c1549db1f6d/invoke.js"}
            ],
            "tag": "script",
            "inner": ""
        }
    ];
    injectScript(scripts, ".banner-post");
}

(async () => {
    let tryChecks = 0;
    while ((document.querySelector(".banner-header") == null || document.querySelectorAll(".banner-post").length === 0) && tryChecks <= 3) {
        await new Promise((resolve) => {
            setTimeout(() => {
                tryChecks += 1;
                resolve();
            }, 1000);
        });
    }

    await loadBannerHeader();
    await loadBannerPost();
})();

(() => {
    const el = document.createElement("style");
    el.innerText = `.banner-post, .banner-header {
        text-align: center;
        display: block;
    }`;
    document.body.appendChild(el);
})();
