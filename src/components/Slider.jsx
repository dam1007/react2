import React from 'react'

const sliderInfo = [
    {
        title: 'Drum School',
        desc: '드럼스쿨만의 차별화된 운영철학을 이야기 합니다.',
        btn: '바로가기',
    }
]

function Slider() {
  return (
    <section id="slider">
        <div className="inner">
        <div className="desc">
            <h2>{sliderInfo[0].title}</h2>
            <p>{sliderInfo[0].desc}</p>
            <a href="/">{sliderInfo[0].btn}</a>
        </div>
        </div>
    </section>
  )
}

export default Slider