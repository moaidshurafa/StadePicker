import { useCallback, useEffect, useRef, useState } from "react";
import logoImg from "./assets/logo.png";
import Stadiums from "./components/Stadiums";
import { AVAILABLE_STADIUMS } from "./data";
import { sortPlacesByDistance } from "./loc";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";

const storedIds = JSON.parse(localStorage.getItem("selectedStadiums")) || [];
const storedStadiums = storedIds.map((id) =>
  AVAILABLE_STADIUMS.find((stade) => stade.id === id)
);

function App() {
  const selectedStadium = useRef();
  const [pickedStadium, setPickedStadium] = useState(storedStadiums);
  const [availableStadiums, setAvailableStadiums] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedStadiums = sortPlacesByDistance(
        AVAILABLE_STADIUMS,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailableStadiums(sortedStadiums);
    });
  }, []);

  const handleStartRemoveStadium = (id) => {
    setModalIsOpen(true);
    selectedStadium.current = id;
  };

  const handleStoptRemoveStadium = () => {
    setModalIsOpen(false);
  };

  const handleSelectStadium = (id) => {
    setPickedStadium((prevPickedStadium) => {
      if (prevPickedStadium.some((stade) => stade.id === id)) {
        return prevPickedStadium;
      }
      const stadium = AVAILABLE_STADIUMS.find((stade) => stade.id === id);
      return [stadium, ...prevPickedStadium];
    });

    const storedIds =
      JSON.parse(localStorage.getItem("selectedStadiums")) || [];

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedStadiums",
        JSON.stringify([id, ...storedIds])
      );
    }
  };

  const handleRemoveStadium = useCallback(() => {
    setPickedStadium((prevPickedStadium) =>
      prevPickedStadium.filter((stade) => stade.id !== selectedStadium.current)
    );
    setModalIsOpen(false);

    const storedIds =
      JSON.parse(localStorage.getItem("selectedStadiums")) || [];

    localStorage.setItem(
      "selectedStadiums",
      JSON.stringify(storedIds.filter((id) => id !== selectedStadium.current))
    );
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStoptRemoveStadium}>
        <DeleteConfirmation
          onCancel={handleStoptRemoveStadium}
          onConfirm={handleRemoveStadium}
        />
      </Modal>
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>StadePicker</h1>
        <p>
          Create your personal collection of UCL stadiums you would like to
          visit or you have visited.
        </p>
      </header>
      <main>
        <Stadiums
          title={"Stadiums I'd like to visit ..."}
          text={"Select the stadiums you would like to visit below."}
          stadiums={pickedStadium}
          onSelectStadium={handleStartRemoveStadium}
        />
        <Stadiums
          title={"UCL 2025-2026 Stadiums"}
          text={"Sort by nearest stadium to me"}
          stadiums={availableStadiums}
          onSelectStadium={handleSelectStadium}
        />
      </main>
    </>
  );
}

export default App;
