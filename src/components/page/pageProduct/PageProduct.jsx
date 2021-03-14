import s from "./PageProduct.module.scss"

// components
import BreadCrumbs from "./../../block/breadCrumbs/BreadCrumbs"
import SliderBlock from "./../../block/sliderBlock/SliderBlock"
import Navigation from "./../../block/navigation/Navigation"

// common
import Sale from "../../common/sale/Sale"
import BtnShow from "../../common/btnShow/BtnShow"
import Button from "../../common/button/Button"

// Image
import like from "./../../../assets/images/svg/like.svg"
import gidrotsikl36666 from "./../../../assets/images/svg/gidrotsikl36666.svg"
import rec from "./../../../assets/images/svg/Rectangle 17.svg"
import rec1 from "./../../../assets/images/svg/Rectangle 17.1.svg"
import rec2 from "./../../../assets/images/svg/Rectangle 17.2.svg"
import star from "./../../../assets/images/svg/Star.svg"
// import { Navigation } from "swiper"







const PageProduct = (props) => {
	return (
		<>
			<BreadCrumbs />

			<section className={s.aboutProduct}>

				<div className={s.bigCard} style={{ margin: "0 100px 0 0" }}>
					<Sale
					style={{ width: "94px", height: "44px", fontSize:"15px", lineHeight:"18px" }} 
					text='SALE'
					/>
					<img className={s.bigImage} src={gidrotsikl36666} alt={'bigImage'} />
					<p className={s.lastPrice}>1 200 475 ₽</p>
					<p className={s.price}>1 100 475 ₽</p>
					<a className={s.message}>Нашли дешевле? Снизим цену!</a>
				</div>

				<div className={s.infoCard}>
					<h2 className={s.title}>
						Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
					</h2>
					<span className={s.code}> Код товара:366666-2</span>
					<div className={s.images}>
						<img className={s.like} src={like} alt={'like'} />
						<div className={s.recs}>
							<img className={s.rec} src={rec2} alt={'rectangle'} />
							<img className={s.rec} src={rec1} alt={'rectangle'} />
							<img className={s.rec} src={rec} alt={'rectangle'} />
						</div>
						<div className={s.stars}>
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
							<img src={star} alt={'star'} />
						</div>
					</div>
						<table className={s.table}>
							<tr>
								<th>Характеристики</th>
								<th>Наличие в магазине</th>
							</tr>
							<tr>
								<td id={s.leftcol}>Производитель</td>
								<td id={s.rightcol}>Канада</td>
							</tr>
							<tr>
								<td id={s.leftcol}>Количество мест, шт: </td>
								<td id={s.rightcol}>3</td>
							</tr>
							<tr>
								<td id={s.leftcol}>Мощность, л.с.</td>
								<td id={s.rightcol}>155</td>
							</tr>
							<tr>
								<td id={s.leftcol}>Тип двигателя</td>
								<td id={s.rightcol}>Бензиновый</td>
							</tr>
							<tr>
								<td id={s.leftcol}>Год выпуска</td>
								<td id={s.rightcol}>2018</td>
							</tr>
						</table>
					<BtnShow />
					<button className={s.btnBuy}>купить</button>
					{/* <Button/> */}
				</div>
			</section>

			<Navigation
			styleWrapper={{ height: "70px" }}
			styleList={{ paddingLeft: "38px" }}
			// linkStyle={{ marginRight: "70px" }}
				text1="О товаре"
				text2="Характеристики"
				text3="Отзывы"
				text4="Самовывоз"
				text5="Доставка"
				text6="Cервис"
				text7="Гарантия"
				// text8=""
			/>

			<div className={s.grid}>
				<div className={s.gridItem} id={s.item1}></div>
				<div className={s.gridItem} id={s.item2}>Магазин</div>
				<div className={s.gridItem} id={s.item3}>Забрать сегодня</div>
				<div className={s.gridItem} id={s.item4}>Забрать в течение недели</div>
				<div className={s.gridItem} id={s.item5}>Адрес</div>
				<div className={s.gridItem} id={s.item6}>Режим работы</div>
				<div className={s.gridItem} id={s.item7}>Доступно</div>
				<div className={s.gridItem} id={s.item8}>Количество</div>
				<div className={s.gridItem} id={s.item9}>Москва, ул. Науки 25</div>
				<div className={s.gridItem} id={s.item10}>Москва, ул.  Южная 134</div>
				<div className={s.gridItem} id={s.item11}>Санкт-Петербург, ул. Красная 19</div>
				<div className={s.gridItem} id={s.item12}>Киев, ул Шевченко 167</div>
				<div className={s.gridItem} id={s.item13}>пн-сб:</div>
				<div className={s.gridItem} id={s.item14}>пн-сб:</div>
				<div className={s.gridItem} id={s.item15}>пн-сб:</div>
				<div className={s.gridItem} id={s.item16}>пн-сб:</div>
				<div className={s.gridItem} id={s.item17}>В наличии</div>
				<div className={s.gridItem} id={s.item18}>В наличии</div>
				<div className={s.gridItem} id={s.item19}>Нет в наличии</div>
				<div className={s.gridItem} id={s.item20}>Нет в наличии</div>
				<div className={s.gridItem} id={s.item21}>1</div>
				<div className={s.gridItem} id={s.item22}>2</div>
				<div className={s.gridItem} id={s.item23}>0</div>
				<div className={s.gridItem} id={s.item24}>0</div>
				<div className={s.gridItem} id={s.item25}></div>
				<div className={s.gridItem} id={s.item26}></div>
				<div className={s.gridItem} id={s.item27}></div>
				<div className={s.gridItem} id={s.item28}></div>
			</div>

			<SliderBlock style={{ padding: "100px 0" }} />

		</>
	);
}

export default PageProduct;