import fetch from 'node-fetch'

async function fetchLocation() {
    const URI = `${process.env.ipApiEndpoint}`;
    const response = await fetch(URI);

    if(!response.ok){
        const message = `An error has occurred: ${resp.status}, ${rest.statusText}`;
        throw new Error(message);
    }
    return await response.json();
}

export { fetchLocation }