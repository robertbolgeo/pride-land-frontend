export interface HeroImage {
img: string,
alt: string,
Hero: boolean,
dateCreated: string,
}
export interface AdminCardPropsType {
id: number,
title: string,
description: string,
imgsrc: string,
link: string,
setCardEditView: (imgsrc: string) => void,
setCardRefs: (cardrefs: AdminCardPropsType[]) => void,
card: AdminCardPropsType,
cardrefs: AdminCardPropsType[],
}

export interface AdminCardRefPropsType {
    id: number, 
    title: string, 
    description: string,
    imgsrc: string, 
    link: string, 
    setCardEditView: (imgsrc: string) => void 
}

export interface AdminCardDataPropsType {
   id: number,
   title: string,
   description: string,
   imgsrc: string,
   link: string,
   setCardEditView: (imgsrc: string) => void,
}

