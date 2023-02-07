import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  const initData = [
    {
      name: "직박구리",
      content: "숲속의 고요함을 깨는 시끄러운 수다쟁이 직박구리",
      image: "./image/01_brown-eared_bulbul .jpeg",
    },
    {
      name: "까치",
      content: "길조로 사랑받았던 까치",
      image: "./image/02_magpie.jpeg",
    },
    {
      name: "참새",
      content: "우리나라 사람들과 가장 가깝게 살고 있는 참새",
      image: "./image/03_sparrow.jpeg",
    },
    {
      name: "박새",
      content: "검정색 긴 넥타이를 한 수다쟁이 박새",
      image: "./image/04_great_tit.jpeg",
    },
    {
      name: "멧비둘기",
      content: "빛바랜 평화와 통신의 상징 멧비둘기",
      image: "./image/05_turtle_dove.jpeg",
    },
    {
      name: "쇠박새",
      content: "식량 저장고를 가지고 있는 쇠박새",
      image: "./image/06_marsh_tit.jpeg",
    },
  ];

  const [data, setData] = useState(initData);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleAddItem = (item) => {
    setData([...data, item]);
  };

  return (
    <div className="App">
      <header>
        <span className="title">서울에서 가장 많이 볼 수 있는 새</span>
      </header>
      <main>
        <div className="sidebar" id="sidebar">
          {/* 추가 버튼 */}
          <button
            type="button"
            className="add-btn"
            id="addItem"
            onClick={showModal}
          >
            <img src="image/add.png" alt="add" width="20px" />
          </button>

          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        {/* 모달 창 */}
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            handleAddItem={handleAddItem}
          />
        )}
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
