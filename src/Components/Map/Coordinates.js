import db from '../../lib/firebase';

function GetAdresses() {
    let orderData = [];


    let adresses = db.collectionGroup('Orders');
    adresses.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let data = doc.data()
            
   


           
        });
    });


    /*
 for (var i = 0; i < orderData.length; i++) {
     let object = orderData[i];
     console.log(object)
 }
*/

    //blub.forEach(element => console.log(element));

    
    
}

export default GetAdresses

