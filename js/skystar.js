// poem
var words=[
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '生日快乐',
    '画船听雨眠',
    '生日快乐',
    '生日快乐',
    '一日不见兮',
    '生日快乐',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '偷偷表白❤',
    '柳絮空缱绻',
    '南风知不知',
    '人生自是有情痴',
    '此恨不关风与月',
    '生日快乐',
    '生日快乐',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '生日快乐',
    '偷偷表白❤',
    '入骨相思知不知',
    '不辞唱遍阳春',
    '夜月一帘幽梦',
    '生日快乐',
    '生日快乐',
    '生日快乐',
    '生日快乐',
    '生日快乐',
    '醉后不知天在水',
    '满船星梦压星河',
    '生日快乐',
    '生日快乐',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '生日快乐',
    '生日快乐',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '解释春风无限恨',
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h3');
      let texttwo = document.querySelector('.texttwo').querySelector('h3');
      let textthree = document.querySelector('.textthree').querySelector('h3');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.innerHTML = '将为你一人闪烁';
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
      },28000)
      setTimeout(function(){
        textone.innerHTML = '从前,有个人爱你很久';
        texttwo.innerHTML = '但偏偏，风渐渐';
        textthree.innerHTML = '把距离吹的好远';
      },112500)


 
