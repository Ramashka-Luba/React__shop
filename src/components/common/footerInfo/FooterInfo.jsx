import s from "./FooterInfo.module.scss"


const FooterInfo = (props) => {
    return (
        <div className={s.footerInfo}>
            <input className={s.menuInput} type="checkbox" id={props.id}/>
            <label className={s.menuLabel} for={props.for}>{props.label}</label>

            <div className={s.menuContent}>
                <ul>
                    <li>
                        <a href={props.href} className={s.link}>{props.item1}</a>
                    </li>
                    <li>
                        <a href={props.href} className={s.link}>{props.item2}</a>
                    </li>
                    <li>
                        <a href={props.href} className={s.link}>{props.item3}</a>
                    </li>
                    <li>
                        <a href={props.href} className={s.link}>{props.item4}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterInfo;