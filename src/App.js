import { Fragment } from "react";
import "./App.css"
import Logo from "./images/Logo.svg";
import HeaderImage from "./images/header-main-img.png"
import Image from "./components/Image";
import Title, { Paragraph, Text } from "./components/Typography";

const App = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            {/* <a href="#!" className="logo">
              <img src={Logo} alt="error" />
            </a> */}

            <Image
              title={"Logo"}
              href={"#!"} className={"logo"} src={Logo}
            />

            <div className="header__menu">
              <a href="#!" className="header__menu-link">Почему у нас</a>
              <a href="#!" className="header__menu-link">Меню бургеров</a>
              <a href="#!" className="header__menu-link">Оформление заказа</a>
            </div>

            <div className="header__nav-button">
              <button type="button" className="header__currentcy">$</button>
            </div>
          </nav>

          <main className="header__main">
            <div className="header__main-content">
              {/* <span className="header__main-badge">
                Новое меню
              </span> */}

              <Text className="header__main-badge">Новое меню</Text>

              {/* <h1 className="title-1">
                бургер чеддер
              </h1> */}

              <Title level={1} className={"title-1"}>
                бургер чеддер
              </Title>

              <p className="header__content-text">
                Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.
              </p>

              <button className="header__main-content__button">
                Смотреть меню
              </button>
            </div>

            {/* <div className="header__main-img">
              <img src={HeaderImage} alt="error" />
            </div> */}

            <Image
              title={"Burger"}
              className={"header__main-img"}
              src={HeaderImage}
            />
          </main>
        </div>
      </header>


    </Fragment>
  )
}

export default App;