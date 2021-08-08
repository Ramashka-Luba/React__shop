import s from './mobileMenu.module.scss'
import { NavLink } from 'react-router-dom';

const MobileMenu = ({active, setActive}) => {
	return (
		<nav className={active ? s.active  : s.menu}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Войти
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Регистрация
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Избранное
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/"}
					>
						Корзина
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/React__shop"}
					>
						Магазины
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Акции
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageProduct"}
					>
						Доставка и оплата
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Квадроциклы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Катера
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Гидроциклы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Лодки
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Вездеходы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Снегоходы
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Двигатели
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink
						className={s.link}
						to={"/PageCatalog"}
					>
						Запчасти
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default MobileMenu;