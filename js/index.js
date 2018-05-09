/*tabs*/
let tabsLis = document.querySelectorAll('#content .tabs>li'),
    tabsCtLis = document.querySelectorAll('#content .tabs-content>li');
tabsLis.forEach(function(tabsli) {
    tabsli.addEventListener('click',function() {
        tabsLis.forEach(function(li) {
            li.classList.remove('active');
        });
        this.classList.add('active');
        let index = [].indexOf.call(tabsLis,this);
        tabsCtLis.forEach(function(tabsCtli) {
            tabsCtli.classList.remove('active');
        });
        tabsCtLis[index].classList.add('active');
    });
});

//初始化
var APP_ID = 'Mugo8DRz0JB2wQoHCfKzI40v-gzGzoHsz';
var APP_KEY = 'vhMJxTzyQviG3EWuuW3QfPbN';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

/* 
    ***向leancloud上传并保存数据***
let SongObject = AV.Object.extend('Song');
let song = new SongObject;

song.set('name','My Star');
song.set('singer','EXILE');
song.set('album','My Star');
song.set('url','http://p6v42xc4h.bkt.clouddn.com/My%20Star.mp3');

let songs = [song];
AV.Object.saveAll(songs).then(function (s) {
    console.log('ok');
}, function (error) {
    console.log('error');
});
*/

/*向.page-rec .new-music .nm-list添加li元素节点*/
let elNmList = document.querySelector('#content .page-rec .nm-list');
let queryNm = new AV.Query('PageRecNmList');
queryNm.find().then(function(songs) {
    for (let i = 0; i < songs.length; i++) {
        let song = songs[i].attributes;
        let elLi = document.createElement('li');
        if (song.intro) {
            elLi.innerHTML = `
                <a href="#" class="nm-link">
                    <div class="nm-intro">
                        <h3 class="nm-title single-ellipsis">
                            ${song.name}
                            <span>${song.intro}</span>
                        </h3>
                        <p class="nm-author single-ellipsis">
                            <svg class="icon icon-sq" aria-hidden="true">
                                <use xlink:href="#icon-sq"></use>
                            </svg>
                            ${song.singer} - ${song.album}
                        </p>
                    </div>
                    <div class="nm-play">
                        <svg class="icon icon-play" aria-hidden="true">
                            <use xlink:href="#icon-play"></use>
                        </svg>
                    </div>
                </a> 
            `; 
        } else {
            elLi.innerHTML = `
                <a href="#" class="nm-link">
                    <div class="nm-intro">
                        <h3 class="nm-title single-ellipsis">
                            ${song.name}
                        </h3>
                        <p class="nm-author single-ellipsis">
                            <svg class="icon icon-sq" aria-hidden="true">
                                <use xlink:href="#icon-sq"></use>
                            </svg>
                            ${song.singer} - ${song.album}
                        </p>
                    </div>
                    <div class="nm-play">
                        <svg class="icon icon-play" aria-hidden="true">
                            <use xlink:href="#icon-play"></use>
                        </svg>
                    </div>
                </a> 
            `; 
        }
        elNmList.appendChild(elLi);
    }
}, function (error) {
    alert('获取新歌曲失败');
});

/*向.page-hot .hm-list添加li元素节点*/
let elHmList = document.querySelector('#content .page-hot .hm-list');
let queryHm = new AV.Query('PageHotList');
queryHm.find().then(function(songs) {
    for(let i = 0; i < songs.length; i++) {
        let song = songs[i].attributes;
        let elLi = document.createElement('li');
        if (song.intro) {
            elLi.innerHTML = `
                <a href="#" class="hm-link">
                    <div class="hm-rank">${song.rank}</div>
                    <div class="hm-song">
                        <div class="hm-sintro">
                            <h3 class="hm-title single-ellipsis">
                                ${song.name}
                                <span>${song.intro}</span>
                            </h3>
                            <p class="hm-author single-ellipsis">
                                <svg class="icon icon-sq" aria-hidden="true">
                                    <use xlink:href="#icon-sq"></use>
                                </svg>
                                ${song.singer} - ${song.album}
                            </p>
                        </div>
                        <div class="hm-play">
                            <svg class="icon icon-play" aria-hidden="true">
                                <use xlink:href="#icon-play"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            `; 
        } else {
            elLi.innerHTML = `
                <a href="#" class="hm-link">
                    <div class="hm-rank">${song.rank}</div>
                    <div class="hm-song">
                        <div class="hm-sintro">
                            <h3 class="hm-title single-ellipsis">
                                ${song.name}
                                <span>${song.intro}</span>
                            </h3>
                            <p class="hm-author single-ellipsis">
                                <svg class="icon icon-sq" aria-hidden="true">
                                    <use xlink:href="#icon-sq"></use>
                                </svg>
                                ${song.singer} - ${song.album}
                            </p>
                        </div>
                        <div class="hm-play">
                            <svg class="icon icon-play" aria-hidden="true">
                                <use xlink:href="#icon-play"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            `; 
        }
        elHmList.appendChild(elLi);
    }
}, function (error) {
    alert('获取热歌榜失败');
});