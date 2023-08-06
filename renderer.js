/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function vimeo() {
    console.log('vimeo');
    createPlayer('main', 'vimeo', 'Vimeo', 'https://player.vimeo.com/video/76979871', 'https://i.vimeocdn.com/video/453879380_640.jpg')
    plyr = new Plyr('#player', {
        ratio: '16:9',
    });
    window.plyr = plyr;
    let type = 'vimeo';
    let src = '13868168';
    setVideo(type, src, plyr);
    plyr.play();
}

function createPlayer(mainElementId, videoType, videoTitle, videoSrc, posterUrl) {
    debugger;
    const playerElement = document.createElement("video");
    playerElement.id = 'player';
    playerElement.className = 'player';
    playerElement.setAttributeNode(document.createAttribute('crossorigin'));
    playerElement.setAttributeNode(document.createAttribute('playsinline'));
    playerElement.setAttributeNode(document.createAttribute('controls'));
    playerElement.setAttribute('src', videoSrc);

    document.getElementById(mainElementId).appendChild(playerElement);
}

function setVideo(videoType, videoSrc, plyr) {
    debugger;
    let obj = null;

    switch (videoType) {

        case "local":
            obj = {
                src: videoSrc,
                type: 'video/mp4',
                size: 720,
            };
            break;

        case "url":
                obj = {
                    src: videoSrc,
                    type: 'video/mp4',
                    size: 720,
                };
                break;

        case "vimeo":
            obj = {
                src: videoSrc,
                provider: 'vimeo',
            };
            break;

        case "youtube":
            obj = {
                src: videoSrc,
                provider: 'youtube',
            };
            break;
    }

    plyr.source = {
        type: 'video',
        sources: [obj],
    };
}