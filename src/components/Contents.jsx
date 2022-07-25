import React from 'react'

const leftInfo = [
    {
        small: 'CLASS',
        title: '드럼스쿨<br/>수강생 모집',
        desc: '취미반/입시반/전문반<br/>전 분야 모집!<br/>이런 분들이 들으면 좋아요~',
        btn: '상담받기',
    }
]

const rightInfo = [
    {
        id: 1,
        title: '취미반',
        desc: '멋있는 취미를 가지고 싶은 분들께 추천해요. 기본기부터 시작하기 때문에 드럼을 처음 치는 초보자 분들이 들으시면 좋습니다.'
    },
    {
        id: 2,
        title: '취미반',
        desc: '드럼을 전공으로 하고 싶은 분들께 추천해요. 예중, 예고, 예대 입시를 다니고 싶으신 분들이 들으시면 좋습니다.'
    },
    {
        id: 3,
        title: '전문반(프로)',
        desc: '프로를 지망하시는 분들께 추천해요. 취미반보다 심층적이며 프로에 준하는 내용을 배울 수 있습니다. 취미반보다 조금 더 깊게 배우고 싶으신 분들도 환영합니다!'
    },
    {
        id: 4,
        title: '전문반(오디션)',
        desc: '오디션을 보시는 분들께 추천해요. 오디션은 입시반, 전문반보다 특수한 케이스로 곡 선정부터 시작해 오디션에 대한 정보들을 알려드립니다.'
    }
]

function RightCont({title, desc}) {
    return (
        <li>
            <span className="icon"></span>
            <h3>{title}</h3>
            <p>{desc}</p>
        </li>
    )
}

function Contents() {
  return (
    <section id="contents">
        <div className="inner">
            <div className="left">
                <em>{leftInfo[0].small}</em>
                <h2>{leftInfo[0].title}</h2>
                <p>{leftInfo[0].desc}</p>
                <a className="consult" href="/">{leftInfo[0].btn}</a>
            </div>
            <div className="right">
                <ul>
                    {rightInfo.map((txt)=>(
                        <RightCont title={txt.title} desc={txt.desc} key={txt.id}/>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Contents