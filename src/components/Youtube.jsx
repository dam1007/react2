import React from 'react'

const youtubeInfo = [
    {
        title: '유튜브 Drum School',
        desc1: '더 다양한 강의는 유튜브를 통해 제공하고 있습니다.',
        desc2: '구독과 좋아요! 부탁드립니다.',
        btn: '바로가기',
    }
]

function Youtube() {
  return (
    <section id="youtube">
        <div className="inner">
            <div className="desc">
            <h2>{youtubeInfo[0].title}</h2>
            <p>{youtubeInfo[0].desc1}<br/>
            {youtubeInfo[0].desc2}</p>
            <a href="/">{youtubeInfo[0].btn}</a>
            </div>
        </div>
    </section>
  )
}

export default Youtube