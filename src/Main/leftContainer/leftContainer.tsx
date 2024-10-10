import style from './style.module.css';
import { AiOutlineClose } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { RxPencil2 } from "react-icons/rx";
import { TfiReceipt } from "react-icons/tfi";
import { AiFillCopy } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

export const LeftContainer = () => {
    return (
        <>
        <div id={style.container}>
        <div className={style.backgroundRadius} id={style.menu}>
            <header id={style.headerMenu}>
                <div id={style.textMenu}><p><span id={style.spanFIN}>ФИН</span> Контроль</p></div>
            <div id={style.menuController}><p>Меню</p><AiOutlineClose id={style.AiOutlineClose}/></div>
            </header>

            <footer id={style.footerMenu}>

        <div id={style.list}>
            <ul>
                <li><div><GoGear className={style.iconsList} />Настройки</div><AiOutlineCaretDown style={{color: "gray"}} className={style.iconsList} /></li>
                <li><div><RxPencil2 className={style.iconsList}/>Внесение данных</div><AiOutlineCaretDown style={{color: "gray"}} className={style.iconsList}/></li>
                <li><div><TfiReceipt className={style.iconsList}/>Отчёты</div><AiOutlineCaretDown style={{color: "gray"}} className={style.iconsList}/></li>
                <li><div><AiFillCopy className={style.iconsList}/>База знаний</div><AiOutlineCaretDown style={{color: "gray"}} className={style.iconsList}/></li>
            </ul>
        </div>

            </footer>
        </div>

                <div className={style.backgroundRadius} id={style.helpers}>

            <h1 className={style.colorText}>Техническая поддержка</h1>
            <div id={style.contacts}>
                <div id={style.phone}>
                <p className={style.textColor2}>Номер поддержки:</p>
                <p className={style.colorText}>8 (999) 999 99 99</p>
                </div>
                <div id={style.mail}>
                <p className={style.textColor2}>Почта поддержки:</p>
                <p className={style.colorText}>pf1@werthesest.ru</p>
                </div>
            </div>

            <div id={style.time}>
                <p className={style.textColor2}>Часы работы:</p>
                <p className={style.colorText}>Пн - Пт с 9:00 до 19:00 мск</p>
                </div>

            <div id={style.other}>
                    <p style={{borderBottom: "0.1dvh solid gray"}}>Пользовательское соглашение</p>
                    <p style={{borderBottom: "0.1dvh solid gray"}}>Политика конфенденциальности</p>
                    <p style={{borderBottom: "0.1dvh solid gray"}}>Юридическая информация</p>
                    <p>Публичеая оферта</p>
            </div>
                </div>
                <div id={style.connection}>
                <AiFillMessage /><p>Связаться с нами</p>
                    </div>
            </div>
            </>
    
    )
}