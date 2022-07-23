import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import './PlayerCard.css'

export default function PlayerCard({player}) {
  return (
    <div className='wrapper' style={{backgroundImage: `url(${player.card_img})`}}>
      <div className='player_top'>
        <div className='player_top_left'>
          <h2 className='player_rating'>{player.rating}</h2>
          <h3 className='player_position'>{player.position}</h3>
          <img alt='' className='player_team_img' src={player.team_img}/>
        </div>
        <img alt='' className='player_img' src={player.img}/>
      </div>

      <div className='player_bottom'>
        <div className='player_stars'>{generateStarElements(player.stars)}</div>
        <h2 className='player_name'>{player.name}</h2>
        <div className='player_stats'>
          <h5 className='player_stat'>{player.height}cm</h5>
          <h5 className='player_stat'>{player.weight}kg</h5>
          <h5 className='player_stat'>Age: {player.age}</h5>
        </div>
        <div className='player_origin'>
          <img alt='' className='player_origin_img' src={player.league_img}></img>
          <img alt='' className='player_origin_img' src={player.national_img}></img>
        </div>
        <div className='player_spec'>
          <div className='player_feet'>{generateFeetElements(player.feet)}</div>
          <h2 className='player_spec_text'>{player.condition}</h2>
          <img alt='' className='player_spec_img' src={player.version_img}></img>
        </div>
      </div>
    </div>
    
  )
}

function generateFeetElements(feet) {

  let classLeft = 'foot'
  let classRight = 'foot'

  if (feet === 'left') {
    classLeft += ' active'
  }
  else if (feet === 'right') {
    classRight += ' active'
  }

  const elements = [
    <svg className={classLeft} width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5217 23.1156C12.5483 21.1736 10.371 19.9273 10.371 17.5724C10.371 15.2175 14.9097 13.9308 15.3921 11.4013C15.8745 8.87185 13.8354 6.49519 12.2344 6.36415C10.6339 6.2331 8.39723 6.56052 6.40195 8.74081C4.40666 10.9215 3.67849 10.4131 3.45901 14.8521C3.23992 19.2911 6.22946 19.9645 8.08334 22.6001C9.93722 25.2357 8.84098 29.4367 11.8305 31.2203C14.8201 33.0039 16.3354 31.4384 16.8532 29.4169C17.3718 27.3958 16.4951 25.0575 14.5217 23.1156ZM0.637164 10.096C-0.119284 10.1229 0.137247 10.3644 0.0428404 10.6733C-0.0515663 10.9821 -0.038421 11.7743 0.583388 12.0962C1.2048 12.4184 2.15046 12.3111 2.24526 11.5858C2.33967 10.8613 1.39401 10.0691 0.637164 10.096ZM1.23189 7.1825C0.907637 7.51823 0.812832 8.27007 1.47487 8.78C2.13692 9.29033 2.78541 9.24995 3.06903 8.99459C3.35265 8.73922 3.28533 7.88009 2.86628 7.51783C2.44762 7.15557 1.55614 6.84676 1.23189 7.1825ZM5.13642 6.32337C5.54153 5.97417 5.52839 5.00775 5.13642 4.59165C4.74445 4.17554 4.16367 3.57138 3.58289 4.06786C3.00211 4.56433 3.23156 5.50422 3.70439 5.94725C4.17682 6.39067 4.73091 6.67256 5.13642 6.32337ZM8.60835 4.39013C9.39189 4.02747 9.52693 2.67187 8.94615 1.9331C8.36497 1.19472 7.31136 0.80554 6.66286 1.36932C6.01436 1.9331 5.85224 3.04759 6.4601 3.57099C7.06837 4.09478 7.82482 4.75278 8.60835 4.39013ZM12.4993 4.65856C13.5665 4.67202 14.5122 3.32948 14.5392 2.30921C14.5663 1.28895 13.5394 -0.0136017 12.6344 -0.00014066C11.7294 0.0133204 10.5403 0.966677 10.5403 2.09423C10.5403 3.22179 11.4318 4.6451 12.4993 4.65856Z" fill="currentColor"></path>
    </svg>,
    <svg className={classRight} width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.47804 23.1156C4.45142 21.1736 6.62875 19.9273 6.62875 17.5724C6.62875 15.2175 2.09006 13.9308 1.60767 11.4013C1.12528 8.87185 3.16438 6.49519 4.76531 6.36415C6.36584 6.2331 8.60252 6.56052 10.5978 8.74081C12.5931 10.9215 13.3213 10.4131 13.5407 14.8521C13.7598 19.2911 10.7703 19.9645 8.91642 22.6001C7.06254 25.2357 8.15877 29.4367 5.16923 31.2203C2.17968 33.0039 0.664397 31.4384 0.146554 29.4169C-0.372085 27.3958 0.504661 25.0575 2.47804 23.1156ZM16.3626 10.096C17.119 10.1229 16.8625 10.3644 16.9569 10.6733C17.0513 10.9821 17.0382 11.7743 16.4164 12.0962C15.795 12.4184 14.8493 12.3111 14.7545 11.5858C14.6601 10.8613 15.6057 10.0691 16.3626 10.096ZM15.7679 7.1825C16.0921 7.51823 16.1869 8.27007 15.5249 8.78C14.8628 9.29033 14.2143 9.24995 13.9307 8.99459C13.6471 8.73922 13.7144 7.88009 14.1335 7.51783C14.5521 7.15557 15.4436 6.84676 15.7679 7.1825ZM11.8633 6.32337C11.4582 5.97417 11.4714 5.00775 11.8633 4.59165C12.2553 4.17554 12.8361 3.57138 13.4169 4.06786C13.9976 4.56433 13.7682 5.50422 13.2954 5.94725C12.8229 6.39067 12.2688 6.67256 11.8633 6.32337ZM8.3914 4.39013C7.60787 4.02747 7.47283 2.67187 8.05361 1.9331C8.63479 1.19472 9.6884 0.80554 10.3369 1.36932C10.9854 1.9331 11.1475 3.04759 10.5397 3.57099C9.93139 4.09478 9.17494 4.75278 8.3914 4.39013ZM4.50041 4.65856C3.43326 4.67202 2.4876 3.32948 2.46051 2.30921C2.43343 1.28895 3.46035 -0.0136017 4.36538 -0.00014066C5.27041 0.0133204 6.45945 0.966677 6.45945 2.09423C6.45945 3.22179 5.56797 4.6451 4.50041 4.65856Z" fill="currentColor"></path>
    </svg>
  ]

  

  return elements
}

function generateStarElements(stars) {
  const starElements = []

  for (let i = 0; i < stars; i++) {
    starElements.push(<FaStar/>)
  }

  for (let i = 0; i < 5 - stars; i++) {
    starElements.push(<FaRegStar/>)
  }
 
  return starElements
}