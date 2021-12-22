import { useState } from 'react';
import './App.css';
import kelvin from './assets/kelvin-costa.png';

function App() {
  const profiles = [{
    name: "Kelvin Costa",
    picture: kelvin,
    username: "@costa",
    followers: 140,
    following: 207
  }]

  const [cta, setCta] = useState('seguir');
  const [follow, setFollow] = useState(profiles[0].followers);

  function activeProfile() {
    const newCta = cta === 'seguir' ? 'seguindo' : 'seguir';
    setCta(newCta)
    const updateProfile = newCta === 'seguir' ? setFollow(follow - 1) : setFollow(follow + 1);
    console.log(updateProfile);
  }


  function Profile({ picture, children: [name, followers, username, following] }) {
    return (
      <div>
        <div className="profile">
          <img className="profilePicture" alt={`${name}`} src={picture}></img>
          <h1>{name}</h1>
          <h2>{username}</h2>
          <p>
            {follow} seguidores<br />
            {following} seguindo
          </p>
        </div>
        <button onClick={activeProfile} className={cta}>{cta}</button>
      </div>
    )
  }

  return (
    <div className="App">
      {profiles.map(unitprofile =>
        <Profile key={unitprofile.username} picture={unitprofile.picture}>
          {unitprofile.name}
          {unitprofile.followers}
          {unitprofile.username}
          {unitprofile.following}
        </Profile>)}

      {/* <Profile picture={kelvin}>Kelvin Costa {140} @costa {207}</Profile>
      <Profile picture={charles}>Charles Santos {302} @charles.santos {419}</Profile>
      <Profile picture={anna}>Anna Bia {842} @anab {150}</Profile>
      <Profile picture={mario}>Mario Hisashi {28} @hisashi {17}</Profile> */}
    </div>
  );
}

export default App;
