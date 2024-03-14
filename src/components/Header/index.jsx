import SaveButton from '../SaveButton';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style['main-header']}>
      <h1>MyAsset Editor</h1>
      <SaveButton />
    </header>
  );
}

export default Header;
