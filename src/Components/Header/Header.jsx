import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
      <img src="/src/assets/headerLogo.svg" alt="Логотип" className='logoImg'/>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-list-item'><a href="/">Главная</a></li>
          <li className='header-nav-list-item'><a href="/cards">Карточки</a></li>
          <li className='header-nav-list-item'><a href="/table">Таблица</a></li>
          <li className='header-nav-list-item'><a href="/results">Результаты</a></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}
