(function ($) {
    var Config = {
        downloadCssDir: 'frozenui/css/', // where to download css
        downloadJsDir: 'frozenui/js/',   // where to download js
        downloadZeptoDir: 'frozenui/lib/zeptojs/',   // where to download Zepto js

        downloadZipName: 'frozen.zip',
        downloadCssName: 'css/frozen.css',
        downloadJsName:  'js/frozen.js',
        downloadZeptoName:  'js/lib/zeptojs/zepto.min.js'
    };

    function getFile (url) {
        return new Promise(function (resolve, reject) {
            var request = $.ajax({
                url: url,
                method: "GET",
                dataType: 'text'
            });
            request.done(function (data) {
                resolve(data);
            });
            request.fail(function (xhr, statusText) {
                reject(xhr, statusText);
            });
        });
    }

    function getFiles(urls) {
        return new Promise(function (resolve, reject) {
            var content = '';
            var promises = [];
            var errors = [];

            urls.forEach(function (url) {
                promises.push(getFile(url)
                    .then(function (data) {
                        content += data;
                        console.log('downloaded: ', url, data.length);
                    }, function (xhr, statusText) {
                        errors.push(xhr);
                    }));
            });

            Promise.all(promises)
                .then(function () {
                    console.log('downloaded all files: ', content.length);
                    resolve(content);
            }, function () {
                    reject(errors);
                })

        });
    }

    $('button.toggle').on('click', function(event) {
        event.preventDefault();
        if ( $(this).data('check') == '1' ){
            $(this).data('check', '0');
            $('#custom-form input[type="checkbox"]').prop('checked',false);
        } else {
            $(this).data('check', '1');
            $('#custom-form input[type="checkbox"]').prop('checked',true);
        }
    });

    $('input[data-click="toggle"]').on('change', function (e) {
        var checked = e.target.checked;
        var $formItem = $(this).parents('.form-item');
        $formItem.find('input[name="css"]').prop('checked', checked);
        $formItem.find('input[name="js"]').prop('checked', checked);
        $formItem.find('input[name="zepto"]').prop('checked', checked);
    });

    $('.form-item').on('change', function (e) {
        var $formItem = $(this);
        var cssChecked = $formItem.find('input[name="css"]').prop('checked');
        var jsChecked  = $formItem.find('input[name="js"]').prop('checked');
        var jsChecked  = $formItem.find('input[name="zepto"]').prop('checked');
        if (cssChecked === jsChecked) {
            $formItem.find('input[data-click="toggle"]').prop('checked', cssChecked);
        }
    });

    $('#custom-form').on('submit', function (e) {
        e.preventDefault();
        if ( $('input[type="checkbox"]:checked').length == 0 ){
            alert ('您还没选择任何组件，请勾选选择。');
            return false;
        }

        try {
            var isFileSaverSupported = !!new Blob;
        } catch (e) {
            alert('- -！你当前的浏览器暂不支持下载，换个最新的 Chrome 试试呗~ ');
            return;
        }

        var files = {
            css: [],
            js:  [],
            zepto: []
        };
        var data = $(this).serializeArray();
        data.forEach(function (item, index) {
            var arr = item.value.split(',');
            arr.forEach(function (item2, index2) {
                files[item.name].push(item2);
            });
        });

        var cssUrls = files.css.map(function (name) {
            return Config.downloadCssDir + name + '.css';
        });
        var jsUrls = files.js.map(function (name) {
            return Config.downloadJsDir + name + '.js';
        });
        var zeptoUrls = files.zepto.map(function (name) {
            return Config.downloadZeptoDir + name + '.js';
        });

        Promise.join(getFiles(cssUrls), getFiles(jsUrls),getFiles(zeptoUrls),
            function (cssContent,jsContent,zeptoContent) {
                if (cssContent || jsContent) {
                    var zip = new JSZip();
                    zip.file(Config.downloadCssName, cssContent);
                    zip.file(Config.downloadJsName, jsContent);
                    zip.file(Config.downloadZeptoName, zeptoContent);
                    var content = zip.generate({type:"blob"});
                    saveAs(content, Config.downloadZipName);
                } else {
                    alert ('下载失败，请重试！');
                    console.log('download fail.');
                }
            }
        );

    });
})(jQuery);