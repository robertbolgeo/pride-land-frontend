export interface HeroImage {
img: string,
alt: string,
href: string,
dateAdded: string,
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