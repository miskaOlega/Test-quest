import React, {useEffect, useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { AppDispatch , RootState } from "../../../redux/store";
import { getApi , TypeJson } from "../../../redux/api";
import { ReactElement , ReactPortal } from "react";
import { SlArrowDown } from "react-icons/sl";
import { slice } from "../../../redux/api";
import style from './style.module.css';



type ReactFragment = Iterable<ReactNode>;
type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;

export const TableApi = (props: {prop: boolean , clears: boolean , forExport:(obj:Record<never, TypeJson>[]) => void }) => {

    
    const [tableState , setTableState] = useState<(JSX.Element | undefined)[][]>();
    const [overQuantity , setOverQuantity] = useState<number[]>()
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.one)
    const dispatch = useAppDispatch();


    
    const doubleClick = (ev:React.MouseEvent<HTMLElement>) => {
        const event = ev.target as HTMLInputElement;
        const div = document.createElement("div");
        const inputs = document.createElement("input");
        div.appendChild(inputs);
        function keyDown (e:any):void {
            if(e.code === "Enter") {
                event.innerHTML = e.target.value;
                div.remove();
                const divs:HTMLCollectionOf<Element> = document.getElementsByClassName(style.tr);
                const massValues: (string | null)[][] = [];
                for(let i:number = 1; i < divs.length; i++) {
                    const massInmassValues:(string | null)[] = [];
                    for(let g:number = 0; g < divs[i].children.length; g++) {
                        massInmassValues.push(divs[i].children[g].textContent);
                    }
                    massValues.push(massInmassValues);
                };
                
                const masssForNewJson: string[] = ["id" , "barcode" , "product_brand" , "product_name" , "product_quantity" , "price"]
                let objTable:Record<never , TypeJson>  = {};
                const newJson:Record<never , TypeJson>[] = massValues.map((i) => {
                    const iMass = i.map((g , idss) => {
                        if(Number(g)) {
                            return objTable = {[masssForNewJson[idss]]: Number(g)};
                        } else {
                            return objTable = {[masssForNewJson[idss]]: g};
                        }
                          
                    });
                    for (let y = 0; y < i.length; y++) {
                        Object.assign(objTable , iMass[y])
                    };
                    return objTable;
                });
                console.log(newJson)
                props.forExport(newJson)
            }
        }
        if(Number(event.textContent)) {
            inputs.type = "number";
            inputs.onkeydown = keyDown;
            event.appendChild(div);
        } else {
            inputs.type = "text";
            inputs.onkeydown = keyDown;
            event.appendChild(div);
        }
        
    }

useEffect(() => {
    dispatch(getApi());
    dispatch(slice.actions.clearReduser(false));
    setTableState(tables);
    setOverQuantity(tableQuantity);
} , [props.prop]);




const tables = statuse.data.map((i: TypeJson , idd:number) => Object.values(i).map((i , ids) => {
    switch(ids) {
        case 0: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].id}</div>;
            
            case 1: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].barcode}</div>;
            
            case 2: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].product_brand}</div>;
                
                case 3: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].product_name}</div>
                    
                    case 4: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].product_quantity}</div>
                    
                    case 5: return <div onDoubleClick={doubleClick} className={style.td} key={ids}>{statuse.data[idd].price}</div>
                    
    }
}))

const tableQuantity = () => {
    const mass = []
   const massNumber = statuse.data.map((i: TypeJson , id:number) => i.product_quantity);
    for(let i = 0; i < massNumber.length; i++) {
        if(mass.length === 0) {
            mass.push(massNumber[i])
        } else {
            const plus:number = mass[0] + massNumber[i];
            mass[0] = plus;
        }
    }
    return mass
}
    return (
        <>
        <div>
            
            {
            props.clears  ? <div id={style.table}>
            <div id={style.THead}>
            <div className={style.tr}>
            <div className={style.th}><p>id</p><SlArrowDown/></div>
            <div className={style.th}><p>barcode</p><SlArrowDown/></div>
            <div className={style.th}><p>product_brand</p><SlArrowDown/></div>
            <div className={style.th}><p>product_name</p><SlArrowDown/></div>
            <div className={style.th}><p>product_quantity</p><SlArrowDown/></div>
            <div className={style.th}><p>price</p><SlArrowDown/></div>
            </div>
            </div>
            <div id={style.TBody}>
            {tableState?.map((i , keyId) => <div className={style.tr} key={keyId}>{i}</div>)}

            <div id={style.resaults}>
                <div id={style.textResault}><p>Итого:</p></div>
                <div id={style.numberProducts}><p>{tables.length}</p></div>
                <div id={style.numberPriceOver}><p>{overQuantity}</p></div>
            </div>
            
            </div>
        </div> : ""
        }
        
        </div>
        
        </>
    )
}