import './App.css'
import Navbar from './navigation/Navbar';
import PlayerCard from './playerCard/PlayerCard';
import { addPlayer, getPlayers } from './firebase/PlayerRepository';

const messi = {
  id: 7511,
  rating: 94,
  position: 'RWF',
  img: 'https://www.pesmaster.com/efootball-2022/graphics/players/7511_.png',
  team_img: 'https://www.pesmaster.com/efootball-2022/graphics/teamlogos/e_000114.png',
  card_img: 'https://www.pesmaster.com/efootball-2022/graphics/players/0000_b01_0_.png',
  stars: 5,
  name: 'L. Messi',
  height: 176,
  weight: 76,
  age: 35,
  league_img: 'https://www.pesmaster.com/efootball-2022/graphics/leaguelogos/emb_0122_w.png',
  national_img: 'https://www.pesmaster.com/efootball-2022/graphics/countries/144.png',
  feet: 'left',
  condition: 'C',
  version_img: 'https://www.pesmaster.com/efootball-2022/graphics/cards/shared/UiPlayerCardInfo_eFootballLogo.png',
}

// addPlayer(messi)
getPlayers()


function App() {
  return (
    <>
      <Navbar/>
      <PlayerCard player={messi} />
    </>
  )
}

export default App;
