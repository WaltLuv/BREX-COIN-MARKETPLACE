import React, { useState, useContext } from 'react'
import { BlockContext } from '../context/BlockContext'

const Featured = () => {
  const [cardColor] = useState([
    'bg-gradient-to-t from-[#00ffff] to-[#ff00ff]',
   
  ])

  const styles = {
    container: `h-[400px] w-full flex p-[20px] flex-col`,
    title: `text-2xl font-bolder mb-[20px] mt-[30px] mb-24 ml-[40px]`,
    cards: `h-full w-full flex gap-[100px] justify-between mb-[30px] ml-[30px]`,
    card1: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-t from-[#00ffff] to-[#ff00ff] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#000000]`,
    card2: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-t from-[#00ffff] to-[#ff00ff] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#000000]`,
    card3: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-t from-[#00ffff] to-[#ff00ff] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#000000]`,
    card4: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-t from-[#00ffff] to-[#ff00ff] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#000000]`,
    cardCross: `h-[180px] w-[125px] rounded-3xl absolute bottom-[20px] left-[20px] transition-all duration-300 hover:scale-105 flex  overflow-hidden`,
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Top Digital Assets</div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://assets.foundation.app/0x0fb460F3A4068D0704B9d214cE6d510248aeD7F7/12/nft.mp4' />
            </video>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://assets.foundation.app/0x0fb460F3A4068D0704B9d214cE6d510248aeD7F7/10/nft.mp4' />
            </video>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://assets.foundation.app/0x0fb460F3A4068D0704B9d214cE6d510248aeD7F7/4/nft.mp4' />
            </video>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.cardCross}>
            <video autoPlay loop muted controls='' className='object-cover'>
              <source src='https://assets.foundation.app/0x0fb460F3A4068D0704B9d214cE6d510248aeD7F7/5/nft.mp4' />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
