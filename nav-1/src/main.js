const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');

const siteDateLocalStroage = localStorage.getItem('siteDate')
const siteDateLocalStorageObject = JSON.parse(siteDateLocalStroage)

const hashMap = siteDateLocalStorageObject || [
    {logo: 'C', url: 'https://cnodejs.org'},
    {logo: 'G', url: 'https://google.com'},
    {logo: 'B', url: "https://bilibili.com"}
]

const simplify = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}

const render = () => {
    $siteList.find('li:not(.last)').remove();
    hashMap.forEach((node, index) => {
        console.log(index);
        const $li = $(`<li>
                <div class="site">
                    <div class="logo">${node.logo.toUpperCase()}</div>
                    <div class="link">${simplify(node.url)}</div>
                    <div class="close">
                           <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                    </div>
                </div>
        </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click','.close',(e)=>{
            e.stopPropagation()
            hashMap.splice(index,1)
            render()
            }

        )
    });
}

render();

$('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加什么网址?')
    if (url.indexOf('http') !== 1) {
        url = 'https://' + url;
    }
    hashMap.push({logo: simplify(url)[0], url: url});
    render();
});

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap) //转化为字符串
    localStorage.setItem('siteDate', string)  //localsrorafe只能存字符串
}
