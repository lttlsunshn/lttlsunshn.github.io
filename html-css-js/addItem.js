function addItem(name, image, content) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${image} alt="${name} />
  <span>${content}</span>
  `;
  // console.log(div);
  document.querySelector(".container").appendChild(div);

  const span = document.createElement("span");
  span.innerHTML = name;
  // console.log(span);
  document.querySelector(".sidebar").appendChild(span);
}

function addItemHandle(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  addItem(name, image, content);

  document.getElementById("name").value = null;
  document.getElementById("image").value = null;
  document.getElementById("content").value = null;
  closeModal();
}

document
  .getElementById("addItemForm")
  .addEventListener("submit", addItemHandle);
