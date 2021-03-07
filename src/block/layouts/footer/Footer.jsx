import instagramLogo from "./../../../assets/images/footerSocial/instagram-sketched 1.png";
import vkLogo from "./../../../assets/images/footerSocial/vk 1.png";
import facebookLogo from "./../../../assets/images/footerSocial/facebook 1.png";
import youtubeLogo from "./../../../assets/images/footerSocial/youtube 1.png";

import Email from "./../../components/email/Email";
import Button from "./../../components/button/Button";
import Titleh4 from "../../components/title/Titleh4";
import Item from "../../components/item/Item";
import Link from "../../components/link/Link";

import "./Footer.scss"

function Footer() {
	return (
		<div className="footer">

			<div div className="top">
				<div className="mail">

					<Titleh4 className= "title-email" value="Подпишитесь на нашу рассылку 
						и узнавайте о акциях быстрее"/>
					<form className="styles">
					<Email />
					<Button />
					</form>
				</div>

				<div className="information-box">
				<Titleh4 className= "title" value="Информация"/>
				<ul className="information">
					<Item className="item" value={<Link className="link" to="#" value="О компании" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Контакты" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Акции" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Магазины" /> }/>
				</ul>
				</div>

				<div className="online-shop-box">
				<Titleh4 className= "title" value="Интернет-магазин"/>
				<ul className="online-shop">
					<Item className="item" value={<Link className="link" to="#" value="Доставка и самовывоз" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Оплата" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Возврат-обмен" /> }/>
					<Item className="item" value={<Link className="link" to="#" value="Новости" /> }/>
				</ul>
				</div>
				
				<div className="social">
					<img className="icon" src={instagramLogo} alt="" />
					<img className="icon" src={vkLogo} alt="" />
					<img className="icon" src={facebookLogo} alt="" />
					<img className="icon" src={youtubeLogo} alt="" />
				</div>
			</div>

			<div className="bottom">
				<Link className="offer" to="#" value="Договор оферты"/>
				<Link className="offer" to="#" value="Политика обработки персональных данных"/>
			</div>
		</div>
);
}

export default Footer;
