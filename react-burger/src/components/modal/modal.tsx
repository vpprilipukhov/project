import React from "react";
import styles from './modal.module.css'
import {
    CloseIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from "./modalComponents/ingredientDetails";
import OrderDetails from "./modalComponents/orderDetails";

interface State {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number

}

interface Props {
    props?: React.ReactNode
    activeFl: boolean
    ing?: State
    activeFunc: Function
    activeModalName: string
}

const Modal: React.FC<Props> = ({
                                    activeFl,
                                    ing,
                                    activeFunc,
                                    activeModalName

                                }) => {

    const [activeIng, setActiveIng] = React.useState<boolean>(false)
    const [activeOrder, setActiveOrder] = React.useState<boolean>(false)

    const off = () => {
        activeFunc(false)
    }

    React.useEffect(
        () => {
            if (activeModalName === 'ing') {
                setActiveIng(true)
                setActiveOrder(false)
            }
            if (activeModalName === 'order') {
                setActiveOrder(true)
                setActiveIng(false)
            }
        }, [activeFl]
    )


    return (

        <div className={activeFl ? (styles.modalContent + ' ' + styles.active) : styles.modalContent}
             onClick={e => e.stopPropagation()}>

            <div className={styles.modalContentIn}>
                <header className={styles.headerMy}>
                    <div className={styles.headerMyText}>
                        {
                            activeIng ? "Детали ингридиета" : ''
                        }</div>
                    <button className={styles.headerMyCloseIcon}
                            onClick={off}>< CloseIcon type={'primary'}/></button>
                </header>

                <div>
                    {activeIng ? <IngredientDetails ing={ing}/> : <div/>}
                    {activeOrder ? <OrderDetails/> : <div/>}

                </div>
            </div>

        </div>

    )
}


export default Modal