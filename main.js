const header= document.querySelector('.card-header')
const title= document.querySelector('.card-title')
const excerpt= document.querySelector('.card-excerpt')
const profileImg= document.querySelector('.profile-img')
const initials= document.querySelector('strong')
const date= document.querySelector('small')

const animated_bgs= document.querySelectorAll('.animated-bg')
const animated_bg_texts= document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500);

function getData(){
    header.innerHTML='<img src="https://th.bing.com/th/id/OIP.puzai_D4808Fi7vlZTj3dQHaFh?rs=1&pid=ImgDetMain" alt="">'
    title.innerHTML='Lorem ipsum dolor sit amet.'
    excerpt.innerHTML= 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore praesentium corpor.'
    profileImg.innerHTML='<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />'
    initials.innerHTML='John Doe'
    date.innerHTML='Oct 08,2020'
    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))
}



