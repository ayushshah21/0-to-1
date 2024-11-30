/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([""]);
  const [socials, setSocials] = useState([""]);
  const[showUpdate, setShowUpdate] = useState(false);
  const[currentCard, setCurrentCard] = useState(null);
  const[clickedUpdate, setClickedUpdate] = useState(false);

  async function handleAddCard() {
    if (
      name === "" ||
      description === "" ||
      interests.length === 0 ||
      socials.length === 0
    )
      return;
    const newCard = { name, description, interests, socials };
    const savedCard = await saveCard(newCard);
    if (savedCard) {
      setCards((prevCards) => [...prevCards, savedCard]);
      setCurrentCard(savedCard);
    }
    toggleDisplay();
    setName("");
    setDescription("");
    setInterests([""]);
    setSocials([""]);
  }

  async function saveCard(newCard){
    try{
      const response = await axios.post("http://localhost:3000/user/card", newCard);
      const savedCard = response.data.card; // Backend should return the full card object, including _id
      alert(response.data.message);
      return savedCard; // Return the saved card
    }
    catch(err){
      console.log(err);
    }
  }

  function handleAddInterest(){
    setInterests([...interests, ""]);
  }
  function handleAddSocial(){
    setSocials([...socials, ""]);
  }
  function handleInterestChange(index, value){
    const newInterests = [...interests];
    newInterests[index] = value;
    setInterests(newInterests);
  }
  function handleSocialChange(index, value){
    const newSocials = [...socials];
    newSocials[index] = value;
    setSocials(newSocials);
  }

  function toggleDisplay(){
    setShowUpdate(true);
  }
  function handleUpdateClick(){
    setClickedUpdate(clickedUpdate => !clickedUpdate);
  }

  useEffect(() => {
    async function loadCards(){
      try{
        const response = await axios.get("http://localhost:3000/user/cards");
        setCards(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
    loadCards();
  },[])

  return (
    <div className="container">
      <div className="fill-card">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        />
        <div>
          <h4>Interest</h4>
          {interests.map((interest, i) => (
            <input
              key={i}
              value={interest}
              onChange={(e) => handleInterestChange(i, e.target.value)}
              type="text"
              placeholder="interests"
            />
          ))}
          <button onClick={handleAddInterest}>Add Interest</button>
        </div>
        <div>
          <h4>Socials</h4>
          {socials.map((social, i) => (
            <input
              key={i}
              value={social}
              onChange={(e) => handleSocialChange(i, e.target.value)}
              type="text"
              placeholder="socials"
            />
          ))}
          <button onClick={handleAddSocial}>Add Social</button>
        </div>
        <button onClick={handleAddCard}>Add Card</button>
      </div>
      <Card cards={cards} showUpdate={showUpdate} handleUpdateClick={handleUpdateClick}/>
      {clickedUpdate && <Modal card={currentCard} handleUpdateClick={handleUpdateClick}  />}
    </div>
  );
}

function Card({ cards, showUpdate, handleUpdateClick }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div key={card._id} className="card-info">
          <h3>{card.name}</h3>
          <p>{card.description}</p>
          <h4>Interests</h4>
          <h6>{card.interests}</h6>
          <div className="socials">
            <button>{card.socials}</button>
          </div>
          {showUpdate && <button onClick={handleUpdateClick} className="upd-btn">Update Card</button>}
        </div>
      ))}
    </div>
  );
}

function Modal({card, setCards, handleUpdateClick}) {
  const [name, setName] = useState(card.name);
  const [description, setDescription] = useState(card.description);
  const [interests, setInterests] = useState(card.interests);
  const [socials, setSocials] = useState(card.socials);

  async function handleSave() {
    const updatedCard = { ...card, name, description, interests, socials };
    try {
      await axios.put(`http://localhost:3000/user/card/${card._id}`, updatedCard);
      setCards((prevCards) =>
        prevCards.map((c) => (c._id === card._id ? updatedCard : c))
      );
      handleUpdateClick();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="modal-overlay" onClick={handleUpdateClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleUpdateClick}>
          &times;
        </button>
        <h2>Update Card</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        />
        <div>
          <h4>Interest</h4>
          {interests.map((interest, i) => (
            <input
              key={i}
              value={interest}
              onChange={(e) =>
                setInterests(
                  interests.map((int, index) =>
                    index === i ? e.target.value : int
                  )
                )
              }
              type="text"
              placeholder="interests"
            />
          ))}
        </div>
        <div>
          <h4>Socials</h4>
          {socials.map((social, i) => (
            <input
              key={i}
              value={social}
              onChange={(e) =>
                setSocials(
                  socials.map((soc, index) =>
                    index === i ? e.target.value : soc
                  )
                )
              }
              type="text"
              placeholder="socials"
            />
          ))}
        </div>
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}


export default App;
