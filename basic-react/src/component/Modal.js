import React, { useState } from "react";

function Modal({ modalOpen, setModalOpen, handleAddItem }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    closeModal();
  };

  return (
    <div
      className={"modal-background" + (modalOpen ? " active" : "")}
      id="modal"
    >
      <form className="modal-window" id="addItemForm" onSubmit={onSubmit}>
        <span className="modal-close" id="closeModal" onClick={closeModal}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="(예) 참새"
          className="input"
          maxLength="10"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="image" className="label">
          이미지
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL을 입력하세요."
          className="input"
          required
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="content" className="label">
          설명
        </label>
        <input
          id="content"
          type="text"
          placeholder="(예) 우리나라 사람들과 가장 가깝게 살고 있는 참새"
          className="input"
          maxLength="10"
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          저장
        </button>
      </form>
    </div>
  );
}

export default Modal;
