function afterLoadedData() {

    /*       sesuaikan selector, masukkan    */

    (function() {
        injectScript([{
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
        }, {
            "attr": [
                {"name": "type", "value": "text/javascript"},
                {"name": "src", "value": "//trashyepochabsorbing.com/391a7c454c7632fa62a39c1549db1f6d/invoke.js"}
            ],
            "tag": "script",
            "inner": ""
        }], {
            "target": ".banner-top"
        });

        function injectScript(scripts, target) {
            let targetElement = target.target;
            for (let script of scripts) {
                let tagName = script.tag, innerContent = script.inner, newElement = document.createElement(tagName);
                newElement.innerHTML = innerContent;
                let attributes = script.attr;
                for (let attribute of attributes) {
                    newElement.setAttribute(attribute.name, attribute.value);
                }
                if (document.querySelector(targetElement)) {
                    document.querySelector(targetElement).append(newElement);
                }
            }
        }
    })();
}

(async () => {
    let tryChecks = 0;
    while (document.querySelector(".banner-header") == null && tryChecks <= 3) {
        await new Promise((resolve) => {
            setTimeout(() => {
                tryChecks += 1;
                resolve();
            }, 1000);
        });
    }

    
    (function() {
        injectScript([{
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
        }, {
            "attr": [
                {"name": "type", "value": "text/javascript"},
                {"name": "src", "value": "//trashyepochabsorbing.com/391a7c454c7632fa62a39c1549db1f6d/invoke.js"}
            ],
            "tag": "script",
            "inner": ""
        }], {
            "target": ".banner-header"
        });

        function injectScript(scripts, target) {
            let targetElement = target.target;
            for (let script of scripts) {
                let tagName = script.tag, innerContent = script.inner, newElement = document.createElement(tagName);
                newElement.innerHTML = innerContent;
                let attributes = script.attr;
                for (let attribute of attributes) {
                    newElement.setAttribute(attribute.name, attribute.value);
                }
                if (document.querySelector(targetElement)) {
                    document.querySelector(targetElement).append(newElement);
                }
            }
        }
    })();
})();

/* script membuat style agar iklan rata tengah (tidak perlu diganti) */
(() => {
    const el = document.createElement("style");
    el.innerText = `.banner-top, .banner-header {
        text-align: center;
        display: block;
    }`;
    document.querySelector("body").append(el);
})();

/*
    Untuk script iklan popunder atau lainnya, jangan masukkan ke dalam sini! 
    silahkan tempelkan kodenya di bagian sebelum tag </head> pada template.
*/
