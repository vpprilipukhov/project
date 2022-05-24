import React from "react";
import styles from './modalOverlay.module.css'
import Modal from "./modal";

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
    activeFunc: Function
    activeFl: boolean
    ing?: State
    activeModalName: string
}

const ModalOverlay: React.FC<Props> = ({
                                           activeFunc,
                                           activeFl,
                                           ing,
                                           activeModalName

                                       }) => {

    const off = () =>{
        activeFunc(false)
    }

    return (
        <div className={activeFl ? (styles.modal + ' ' + styles.active) : styles.modal}
             onClick={off}>
            <Modal activeFl={activeFl} ing={ing} activeFunc={activeFunc} activeModalName={activeModalName}/>
        </div>
    )
}


export default ModalOverlay