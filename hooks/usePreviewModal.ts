import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalProps{
  isOpen:boolean,
  data?:Product,
  onOpen:(data:Product)=>void,
  onClose:()=>void
}


const usePreviewModal =create<PreviewModalProps>((set)=>({
  isOpen:false,
  data:undefined,
  onOpen:(data:Product)=>set({data,isOpen:true}),
  onClose:()=>set({isOpen:false})
}))


export default usePreviewModal