import React from 'react'

const imageText = [
    {
        title: '강사진 프로필',
        desc: '드럼 스쿨의 실력 넘치는 강사님들을 소개합니다~'
    }
]

const imageInfo = [
    {
        image: 'assets/img/photo01.jpg',
        name: '한승진 / 전문반',
        btn: '자세히 보기',
    },
    {
        image: 'assets/img/photo02.jpg',
        name: '박상현 / 입시반',
        btn: '자세히 보기',
    },
    {
        image: 'assets/img/photo03.jpg',
        name: '우지현 / 전문반',
        btn: '자세히 보기',
    }
]

function ImgInfo({image, name, btn}){
    return (
        <article>
            <figure><img src={image} alt={name}/></figure>
            <figcaption>
                <p>{name}</p>
                <a href="/">{btn}</a>
            </figcaption>
        </article>
    )
}

function Image() {
  return (
    <section id="image">
        <div className="inner">
            <div className="tit">
                <h2>{imageText[0].title}</h2>
                <p>{imageText[0].desc}</p>
            </div>
            <div className="cont">
                {imageInfo.map((txt)=>(
                    <ImgInfo image={txt.image} name={txt.name} btn={txt.btn} key={txt.name} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Image