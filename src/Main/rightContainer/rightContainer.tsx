import style from './style.module.css';
import { FaUserCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { FaFileExport } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { TableApi } from './tableApi/tableApi';
import { useState } from 'react';
import { AppDispatch , RootState } from '../../redux/store';
import { slice , useSetApiQueryMutation , TypeJson} from '../../redux/api';
import { useDispatch , useSelector } from 'react-redux';


export const RightContainer = () => {
    const [buttons , setButtons] = useState<boolean>(false);
    const [returnReload , setReturnReload] = useState<boolean>(false);
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.one)
    const dispatch = useAppDispatch();
    const [setApi] = useSetApiQueryMutation();
    const [newJson , setNewJson] = useState<Record<never , TypeJson>[]>([])

    const clickReload = ():void => {
        if(returnReload) {
            setButtons(false);
            setReturnReload(false);
        } else {
            setButtons(true);
            setReturnReload(true);
        }
    }

        const forExport = (objs: Record<never, TypeJson>[]):void => {
            setNewJson(objs)
        }

        const clickExport =  () => {
            for(let i:number = 0; i < statuse.data.length; i++) {
                setApi(newJson[i]);
            }
            console.log(statuse.data)
        }
    return (
        <>
        <div id={style.container}>

        <header>
            <div className={style.classHeader} id={style.leftHeader}>

            <p id={style.pHeader1}><FaUserCircle style={{marginRight: "1vh"}} />Иванов И.И</p>
            <p id={style.pHeader2}>Тариф до 15.05.2024</p>

            </div>


            <div className={style.classHeader} id={style.rightHeader}>

            <p className={style.classRadiusP} id={style.pHeader3}>Выйти</p>
            <p className={style.classRadiusP} id={style.pHeader4}>О нас <BsArrowRight style={{marginLeft: "0.5vh"}} /></p>

            </div>
        </header>

        <div id={style.article}>
            <h1>Остатки сформированы на 01.04.2023 г.</h1>
            <div id={style.imageArticle}><AiFillCopy className={style.classArticle} /><p className={style.classArticle}>Инструкции</p></div>
        </div>

        <nav>

        <div id={style.Barcode}>
            <p>Баркод</p><input placeholder="5643242134323099" type="text" />
        </div>


        <div id={style.Article}>
            <p>Артикул</p>
            <input placeholder="ДжЖСинМом0823" type="text" />
        </div>

        <div id={style.Size}>
            <p>Размер</p>
            <input placeholder='44' type="number" />
        </div>

        <div id={style.Category}>
            <span>
            <p>Категория</p>
            <select>
                <option value="Джинсы">Джинсы</option>
            </select>
            </span>
        </div>

        </nav>


        <div id={style.button}>
            <div id={style.makes}><p>Сформировать</p></div>
            <div onClick={clickExport} id={style.exports}><BsFillCloudUploadFill style={{marginLeft: "1vh"}} /><p>Экспорт</p></div>

        </div>


        <div id={style.control}>

        <div id={style.leftContol}>
            <p onClick={clickReload} style={{marginRight: "5vh"}}><FaFileExport style={{marginRight: "1vh"}} />Загрузить данные из csv</p>
            <p><VscNewFolder style={{marginRight: "1vh"}} />Изменить данные</p>
            </div>
        <div onClick={() => {setReturnReload(false); dispatch(slice.actions.clearReduser(true)); console.log(statuse.data)}} id={style.rightControl}><p>Очистить <AiOutlineClose /></p></div>

        </div>

        <div id={style.table}>
        <TableApi prop = {buttons} clears = {returnReload} forExport = {forExport}/>
        </div>

        </div>
        </>
    )
}