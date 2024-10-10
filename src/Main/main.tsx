import style from './style.module.css';
import { LeftContainer } from './leftContainer/leftContainer';
import { RightContainer } from './rightContainer/rightContainer';

export const Main = () => {
    return (
        <>
        <div id={style.container}>
            <div id={style.leftContainer}>
                <LeftContainer />
            </div>
            <div id={style.rightContainer}><RightContainer /></div>
            
            </div>
            
            </>
    )
}