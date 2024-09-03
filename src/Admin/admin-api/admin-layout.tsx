

const endpoint = process.env.backend_url + "layout/"

export const getHeroImages = async() => {
    const request = await fetch(endpoint + "heroimages/");
    const result = await request.json();
    return result;
}

export const getCardRefs = async() => {
    const request = await fetch(endpoint + "cardrefs/");
    const result = await request.json();
    return result;
}

