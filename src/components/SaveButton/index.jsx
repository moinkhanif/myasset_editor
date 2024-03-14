import style from './SaveButton.module.css';

function SaveButton() {
  return (
    <button type="button" className={style['save-button']}>
      Save
    </button>
  );
}

export default SaveButton;
