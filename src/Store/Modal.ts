import {create} from 'zustand'
import type { Modal } from '../types/interface'

interface viewModal {
    isOpen : boolean;
    setIsOpen : (value: boolean) => void;
}
export const useModalStore = create<Modal>((set)=>({

isOpen: false,
setOpen: (value: boolean) => set({ isOpen: value }),


}))

export const useViewTask = create<viewModal>(((set)=>(
    
       { isOpen : false,
        setIsOpen : (value:boolean ) => 
            set({isOpen : value})
        }
    
)))

interface LogOut{
    isOpen : boolean,
    setIsOpen : (value:boolean) => void
}

export const useLogOutModal = create<LogOut>((set)=>({
    isOpen:false,
    setIsOpen: (value)=> set({isOpen : value})
}))


