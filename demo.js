
function play_animation() {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    var cw = document.documentElement.clientWidth;
    var ch = document.documentElement.clientHeight;
    var can = document.getElementById('c-1');
    can.height = ch;
    can.width = cw;
    var framesUrl = [];
    for (let i = 1000; i < 1210; i++) {
        framesUrl.push('./images/' + i + '.jpg');
    }
    var ani = new frame_ani({
        canvasTargetId: "c-1", // target canvas ID
        voice: "vol", // target canvas ID
        framesUrl: framesUrl, // frames url
        loop: false, // if loop
        height: ch, // source image's height (px)
        width: cw, // source image's width (px)
        frequency: 15, // count of frames in one second
        audioIonName: "bgm_1", // ion.sound audio name
        onComplete: function () { // complete callback
            // $('.showPlayBtn').show()
            ion.sound.pause('bgm_1');
            window.location ='http://tb.cn/PEZH0Ow'
        }
    });
    $('#vol').click(function(){
        if($(this).hasClass('playIng')){
            ion.sound.pause('bgm_1');
            $(this).removeClass('playIng')
        }else {
            $(this).addClass('playIng')
            ion.sound.play('bgm_1');
        }
    })
    ani.initialize(() => {
        $(".lodingImg").hide();
        ani.play();
        $('#vol').show()
        if (isAndroid) {
            $('#vol').addClass('playIng')
            setTimeout(function(){
                ion.sound.play('bgm_1')
            },100);
        }
    });
}
$(document).ready(() => {
    // ion.sound BGM
    ion.sound({
        sounds: [
            {
                name: "bgm_1",
                loop: true
            }
        ],
        volume: 0.5,
        path: "audio/", // my test URL
        preload: true,
        multiplay: false,
        // 保证音频加载完成
        ready_callback: () => {
            play_animation();
        }
    });
    var u = navigator.userAgent;
    $('.playBtn').click(function () {
    });
});