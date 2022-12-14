export const isNumber = (txt) => {
    const regex = /^[0-9\b]+$/;
    if (txt === "" || regex.test(txt)) {
        return true
    }
    return false
};

export const Endpoint = {
    API_URL: 'https://invoice-a4dd7-default-rtdb.firebaseio.com/'
}