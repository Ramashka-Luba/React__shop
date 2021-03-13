import logo from "./../../../assets/images/header/logo.svg"
import location from "./../../../assets/images/svg/location.svg"
import like from "./../../../assets/images/svg/like.svg"
import person from "./../../../assets/images/svg/person.svg"
import basket from "./../../../assets/images/svg/basket.svg"
import Navigation from "../navigation/Navigation"


import s from "./Header.module.scss"

const Header = (props) => {

	return (
		<>
			<header style={props.style} className={s.header}>
				<div className={s.wrapper}>
					<nav className={s.menu}>
						<ul className={s.list}>

							<li className={s.item}>
								<a
									className={s.text}
									href={"#"}
								>
									Магазины
								</a>
							</li>

							<li className={s.item}>
								<a
									className={s.text}
									href={"#"}
								>
									Акции
								</a>
							</li>

							<li className={s.item}>
								<a
									className={s.text}
									href={"#"}
								>
									Доставка и оплата
								</a>
							</li>

						</ul>
					</nav>

					<div className={s.logo}>
						<img
							src={logo}
							alt={'logo'}
						/>
						<h1 className={`${s.text} ${s.title}`}>DRIVE MOTO</h1>
					</div>

					<div className={s.row}>
						<div className={s.wrapperBlock}>
							<img
								className={s.location}
								src={location}
								alt={'logo'}
							/>

							<p className={s.text}>
								Москва,  ул. Науки  25
						</p>

						</div>

						<div className={s.wrapperBlock}>
							<img
								className={s.icon}
								src={like}
								alt={'like'}
							/>
							<img
								className={s.icon}
								src={person}
								alt={'person'}
							/>
							<div className={s.counter}>
								<img
									className={s.icon}
									src={basket}
									alt={'basket'}
								/>
								<span className={s.number}>
									0
							</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Navigation />
		</>
	);
}

export default Header;