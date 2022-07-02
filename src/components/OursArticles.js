/* import React from 'react';
import '../stylesheets/Components.css';

function OursArticles({nameblock,imageCardF,nameStateF,dataStateF,imageCardS,nameStateS,dataStateS,imageCardT,nameStateT,dataStateT,imageCardFR,nameStateFR,dataStateFR}) {
  return (
    <div className='AllNews'>
        <div className='nameState'>{nameblock}</div>
        <div>
            <div className='MainContent'>
                <div className='news'>
                    <div className='newsImage'><img src={imageCardF}/></div>
                    <div className='textPart'>
                        <span>{nameStateF}</span>
                        <span>{dataStateF}</span>
                    </div>
                </div>
                <div className='news'>
                    <div className='newsImage'><img src={imageCardS}/></div>
                    <div className='textPart'>
                        <span>{nameStateS}</span>
                        <span>{dataStateS}</span>
                    </div>
                </div>
                <div className='news'>
                    <div className='newsImage'><img src={imageCardT}/></div>
                    <div className='textPart'>
                        <span>{nameStateT}</span>
                        <span>{dataStateT}</span>
                    </div>
                </div>
                <div className='news'>
                    <div className='newsImage'><img src={imageCardFR}/></div>
                    <div className='textPart'>
                        <span>{nameStateFR}</span>
                        <span>{dataStateFR}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default OursArticles */

import React from 'react'
import { News } from './NewsList'
import NewsHTML from './NewsHTML'
function OursArticles() {
    return (
        <div className='OursArticles'>
            {News.map((test, key) => {
                return (
                    <NewsHTML
                        key={key}
                        imageCard={test.imageCard}
                        nameState={test.nameState}
                        dataState={test.dataState}
                    />
                )
            })}
        </div>
    )
}

export default OursArticles