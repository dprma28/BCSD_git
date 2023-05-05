const data = [
    {id:1, name: "I AM", src: "cover/I AM.jpeg"},
    {id:2, name: "Kitsch", src: "cover/Kitsch.jpeg"},
    {id:3, name: "UNFORGIVEN", src: "cover/UNFORGIVEN.jpeg"},
    {id:4, name: "꽃", src: "cover/꽃.jpeg"},
    {id:5, name: "손오공", src: "cover/손오공.jpeg"},
    {id:6, name: "파이팅 해야지", src: "cover/파이팅 해야지.jpeg"},
    {id:7, name: "Ditto", src: "cover/Ditto.jpeg"},
    {id:8, name: "Hype boy", src: "cover/Hype boy.jpeg"},
    {id:9, name: "사람 Pt.2", src: "cover/사람 Pt.2.jpeg"},
    {id:10, name: "OMG", src: "cover/OMG.jpeg"},
    {id:11, name: "FRIEND THE END", src: "cover/FRIEND THE END.jpeg"},
    {id:12, name: "Teddy Bear", src: "cover/Teddy Bear.jpeg"},
    {id:13, name: "물론", src: "cover/물론.jpeg"},
    {id:14, name: "F*ck My Life", src: "cover/Fuck My Life.jpeg"},
    {id:15, name: "사건의 지평선", src: "cover/사건의 지평선.jpeg"},
    {id:16, name: "I Don't Think That I Like Her", src: "cover/I Don't Think That I Like Her.jpeg"},
    {id:17, name: "사랑은 늘 도망가", src: "cover/사랑은 늘 도망가.jpeg"},
    {id:18, name: "헤어지자 말해요", src: "cover/헤어지자 말해요.jpeg"},
    {id:19, name: "빛이 나는 너에게", src: "cover/빛이 나는 너에게.jpeg"},
    {id:20, name: "CHRISTIAN", src: "cover/CHRISTIAN.jpeg"},
    {id:21, name: "심(心)", src: "cover/심(心).jpeg"},
    {id:22, name: "After LIKE", src: "cover/After LIKE.jpeg"},
    {id:23, name: "ANTIFRAGILE", src: "cover/ANTIFRAGILE.jpeg"},
    {id:24, name: "우리들의 블루스", src: "cover/우리들의 블루스.jpeg"},
    {id:25, name: "Love Me Like This", src: "cover/Love Me Like This.jpeg"},
    {id:26, name: "Attention", src: "cover/Attention.jpeg"},
    {id:27, name: "Cupid", src: "cover/Cupid.jpeg"},
    {id:28, name: "Like Crazy", src: "cover/Like Crazy.jpeg"},
    {id:29, name: "LOVE DIVE", src: "cover/LOVE DIVE.jpeg"},
    {id:30, name: "다시 만날 수 있을까", src: "cover/다시 만날 수 있을까.jpeg"}
]

const root = document.getElementById('root')

data.forEach ((music) => {
const musicId = document.createElement('div')
const musicName = document.createElement('div')
const cardImg = document.createElement('img')

musicId.innerText = music.id;
musicName.innerText = music.name;
cardImg.setAttribute("src", music.src);

const musicContainer = document.createElement('div')

musicContainer.appendChild(musicId)
musicContainer.append(cardImg)
musicContainer.appendChild(musicName)
musicContainer.className = "music"

root.appendChild(musicContainer)
})

const basket = document.getElementById('basket')

root.addEventListener('click', (e) => {
    let target = e.target.parentNode;
    if (target.className != 'music') return;
    
    basket.append(target)
})

basket.addEventListener('click', (e) => {
    let target = e.target.parentNode;
    if (target.className != 'music') return;

    root.append(target)
})