const onLoad = () => {
  console.log(3);
  const ele = document.querySelector<HTMLAnchorElement>(".hatena_widget");
  if (ele) {
    ele.innerHTML = `
      <span>2</span>
    `;
  }
};

window.addEventListener("load", onLoad);

export {};
