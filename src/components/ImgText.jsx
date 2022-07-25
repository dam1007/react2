import React from 'react'

const imgTextdesc = [
    {
        title: '연습실 구경하기',
        desc1: '드럼 레슨이 이뤄지는 공간을 소개합니다.',
        desc2: '강의실 4개와 연습실 4개로 나뉘어져 직접 오셔서 예약제로 사용하실 수 있습니다.',
    }
]

const imgTextInfo = [
    {
        image: 'assets/img/room01.jpg',
        title: '강의실 A룸',
        desc: 'Gretsch USA Custom 5pcs & Yamaha Maple Custom snare / Zildjian A Custom set',
    },
    {
        image: 'assets/img/room02.jpg',
        title: '강의실 B룸',
        desc: 'Gretsch New Classic 6pcs / Zildjian A Custom set',
    },
    {
        image: 'assets/img/room03.jpg',
        title: '강의실 C룸',
        desc: 'DrumCraft &amp; Basileia Gemstone Cymbals',
    },
    {
        image: 'assets/img/room04.jpg',
        title: '강의실 D룸',
        desc: 'Tama Starclassic Performer / Paiste Signature Precision Universal Set',
    },
    {
        image: 'assets/img/room05.jpg',
        title: '연습실 1룸',
        desc: 'Mapex Saturn 4 MH Exotic 5pcs / Paiste Signature Precision Universal Set',
    },
    {
        image: 'assets/img/room06.jpg',
        title: '연습실 2룸',
        desc: 'Gretsch Renown57 5pcs / Sabian AAX Set',
    },
    {
        image: 'assets/img/room07.jpg',
        title: '연습실 3룸',
        desc: 'Gretsch Catalina Maple 5pcs / Sabian AAX Set',
    },
    {
        image: 'assets/img/room08.jpg',
        title: '연습실 4룸',
        desc: 'Mapex Saturn 4 MH Exotic 6pcs / Mapex Black Panther Snare / Zildjian A Custom set',
    },
]

function ImgTextCont({image, title, desc}){
    return (
        <li>
            <figure><img src={image} alt={title}/></figure>
            <figcaption>
                <h3>{title}<a href="/" className='ir_pm'>{title}</a></h3>
                <p>{desc}</p>
            </figcaption>
        </li>
    )
}

function ImgText() {
    return (
        <section id="imgText">
            <div className="inner">
                <div className="tit">
                    <h2>{imgTextdesc[0].title}</h2>
                    <p>{imgTextdesc[0].desc1}<br/>
                    {imgTextdesc[0].desc2}</p>
                </div>
                <ul>
                    {imgTextInfo.map((txt)=>(
                        <ImgTextCont image={txt.image} title={txt.title} desc={txt.desc} key={txt.title} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ImgText