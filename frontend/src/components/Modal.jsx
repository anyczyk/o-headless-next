import React, {useEffect, useState, useRef} from "react";

export const Modal = ({setModalOpen, children}) => {
    const refBgCloseModal = useRef(null);
    const closeModal = (e) => {
        if(e.target === refBgCloseModal.current) {
            setModalOpen(false);
        }
    };
    return (
        <>
            {children ?
                <div onClick={(e) => closeModal(e)} ref={refBgCloseModal} className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black text-white z-99">
                    {children}
                </div> : ''}
        </>
    );
};
