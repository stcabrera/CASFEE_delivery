import Orders from '../Orders/Orders';

let orderData = [];

function GetMarkers() {
    let orders = Orders();

    orders.forEach((order) => {
        let lat = order.latitude;
        let lng = order.longitude;
        let adress = order.adress;
        let name = order.firstName + ' ' + order.lastName;
        let id = order.number
        let coord = {
            lat: lat, 
            lng: lng, 
            adress: adress, 
            name: name,
            id: id
        }
        orderData.push(coord);  
    })

    return (orderData)
}

export default GetMarkers;