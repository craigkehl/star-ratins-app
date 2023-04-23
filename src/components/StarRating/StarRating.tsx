import { useEffect, useState } from 'react'

import classes from './StarRating.module.css'

type Props = {
  num?: number
  blur?: number
}

type Stars = {
  s1: 'yellow' | 'black' | 'gradient'
  s2: 'yellow' | 'black' | 'gradient'
  s3: 'yellow' | 'black' | 'gradient'
  s4: 'yellow' | 'black' | 'gradient'
  s5: 'yellow' | 'black' | 'gradient'
}

const StarRating = ({ num = 4.5, blur = 0 }: Props) => {
  const [stars, setStars] = useState<Stars>({
    s1: 'black',
    s2: 'black',
    s3: 'black',
    s4: 'black',
    s5: 'black'
  })
  const remainder = Math.round((num % 1)*100)/100

  useEffect(() => {
    if (num > 0)
    setStars((prev) => {
      const current = {...prev}
        current.s1 = (num >= 1) ? 'yellow' : (num > 0) ? 'gradient' : 'black'
        current.s2 = (num >= 2) ? 'yellow': (num > 1) ? 'gradient': 'black'
        current.s3 = (num >= 3 ) ? 'yellow': (num > 2) ? 'gradient': 'black'
        current.s4 = (num >= 4 ) ? 'yellow': (num > 3) ? 'gradient': 'black'
        current.s5 = (num === 5) ? 'yellow' : (num > 4) ? 'gradient' : 'black'
        return current
      })
    }, [num])

  const gradient = (
    <linearGradient id='gradient'>
      <stop className={classes.stop1} offset={remainder - blur +.02} />
      <stop className={classes.stop2} offset={remainder + blur } />
    </linearGradient>
  )

  const starArray = (
    <svg  width="540" height="100" viewBox="0 0 540 100">
        <defs>{gradient}</defs>
      
      <polyline
        fill={(stars.s1 === 'gradient') && "url(#gradient)" || stars.s1}
        points="18,100 32,64 0,41 38,41 50,5 62,41 100,41 68,64 82,100 50,78 18,100" />
    
      <polyline 
        fill={(stars.s2 === 'gradient') && "url(#gradient)" || stars.s2} 
        points="128,100 142,64 110,41 148,41 160,5 172,41 210,41 178,64 192,100 160,78 128,100" />
    
      <polyline 
        fill={(stars.s3 === 'gradient') && "url(#gradient)" || stars.s3} 
        points="238,100 252,64 220,41 258,41 270,5 282,41 320,41 288,64 302,100 270,78 238,100" />
    
      <polyline 
        fill={(stars.s4 === 'gradient') && "url(#gradient)" || stars.s4} 
        points="348,100 362,64 330,41 368,41 380,5 392,41 430,41 398,64 412,100 380,78 348,100" />
    
      <polyline 
        fill={(stars.s5 === 'gradient') && "url(#gradient)" || stars.s5} 
        points="458,100 472,64 440,41 478,41 490,5 502,41 540,41 508,64 522,100 490,78 458,100" />
      </svg>
  )

  
 

  return (
    <>
      <div className={classes.container}>
        <div className={classes.svg}>
          {starArray}
        </div>
        <span className={classes.circle}>
          {num.toString()}
        </span>
      </div>
     
    </>
  )
}

export default StarRating