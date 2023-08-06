/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
function vimeo() {
    console.log('vimeo');
    desturctPlayer();
    createPlayer('main')
    plyr = new Plyr('#player', {
        ratio: '16:9',
    });
    window.plyr = plyr;
    let type = 'vimeo';
    let src = '13868168';
    setVideo(type, src, plyr);
    plyr.play();
}

function youtube() {
    console.log('youtube');
    desturctPlayer();
    createPlayer('main')
    plyr = new Plyr('#player', {
        ratio: '16:9',
    });
    window.plyr = plyr;
    let type = 'youtube';
    let src = '9u0EL_u4nvw';
    setVideo(type, src, plyr);
    plyr.play();
}

function cdn() {
    console.log('cdn');
    desturctPlayer();
    createPlayer('main')
    plyr = new Plyr('#player', {
        ratio: '16:9',
    });
    window.plyr = plyr;
    let type = 'url';
    let src = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
    setVideo(type, src, plyr);
    plyr.play();
}

function local() {
    console.log('local');
    desturctPlayer();
    createPlayer('main')
    plyr = new Plyr('#player', {
        ratio: '16:9',
    });
    window.plyr = plyr;
    let type = 'local';
    let src = 'assets/video/Big_Buck_Bunny_1080_10s_30MB.mp4';
    setVideo(type, src, plyr);
    plyr.play();
}

function desturctPlayer() {
    let mainElementId = 'main';
    let mainElement = document.getElementById(mainElementId);
    try {
        mainElement.removeChild(document.querySelector('.plyr'));
        if (window.plyr){
            window.plyr.destroy()
        };
        if (plyr){
             plyr.destroy()
        };
    } catch (error) {
        console.log(error);
    }

}

function createPlayer(mainElementId) {
    const playerElement = document.createElement("video");
    playerElement.id = 'player';
    playerElement.className = 'player';
    playerElement.setAttributeNode(document.createAttribute('crossorigin'));
    playerElement.setAttributeNode(document.createAttribute('playsinline'));
    playerElement.setAttributeNode(document.createAttribute('controls'));
    playerElement.setAttribute('src', '');

    document.getElementById(mainElementId).appendChild(playerElement);
}

function setVideo(videoType, videoSrc, plyr) {
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