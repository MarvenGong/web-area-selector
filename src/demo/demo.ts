import AreaSelector from '../../dist/index.js';
const selectArea = async () => {
  console.info(AreaSelector);
  const result = await AreaSelector.getInstance().init();
  alert(JSON.stringify(result));
};

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 27:
      AreaSelector.getInstance().stop()
      break;
  }
});
const btnStart = document.getElementById('btn-start') as HTMLButtonElement;
btnStart.addEventListener('click', () => {
  selectArea();
})
selectArea();