import db from '../../lib/firebase';


function readOrder(event) {
    let lat;
    let long;
    let firstName = event.target.parentElement.parentElement.parentElement.dataset.firstname,
        lastname = event.target.parentElement.parentElement.parentElement.dataset.lastname,
        adress = event.target.parentElement.parentElement.parentElement.dataset.adress,
        postcode = event.target.parentElement.parentElement.parentElement.dataset.postcode,
        city = event.target.parentElement.parentElement.parentElement.dataset.city,
        total = event.target.parentElement.parentElement.parentElement.dataset.total,
        paymentmethod = event.target.parentElement.parentElement.parentElement.dataset.payment,
        ordernumber = event.target.parentElement.parentElement.parentElement.dataset.ordernumber

    fetch(process.env.REACT_APP_MAPBOX_GEOCODING + adress + ' ' + postcode + ' ' + city + ' switzerland.json?access_token=' + process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
        .then(response => response.json())
        .then(data => {
            lat = data.features[0].center[0]
            long = data.features[0].center[1]

            db.collection('Orders').add({
                firstName: firstName,
                lastName: lastname,
                adress: adress,
                postcode: postcode,
                city: city,
                total: total,
                paymentMethod: paymentmethod,
                latitude: lat,
                longitude: long
            })
        })
        .then(() => {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", process.env.REACT_APP_SHOP_API);
            myHeaders.append("Content-Type", "application/json");

            const config = {
                method: 'PUT',
                headers: myHeaders,
                body: JSON.stringify({ "status": "on-hold" }),
                redirect: 'follow'
            };

            fetch("https://testshop.cabrera.media/wp-json/wc/v2/orders/" + ordernumber, config)
                .catch(error => console.log('error', error));
        })
        .catch(error => console.log('error', error));

}

export default readOrder