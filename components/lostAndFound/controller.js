const store = require('./locator');

exports.addNewLostFound = (pet) => {

    return new Promise((resolve, reject) => {
        if (!pet.status || !pet.pet) {
            console.error('[addPet controller error]Faltan datos');
            reject('Debe indicarse mínimo el tipo de animal y si el animal es perdido o encontrado');
            return false;
        }

        store.addNewLostFound(pet);

        resolve(pet);
    })
   
}

exports.getAllLostFound = (petStatus, petType) =>{
    let status = petStatus ? petStatus : null;
    return new Promise((resolve, reject) => {
        resolve(store.getAllLostFound(status, petType));
    })
}

// exports.getAllLost = (petType) =>{
//     return new Promise((resolve, reject) => {
//         resolve(store.getAllLost(petType));
//     })
// }

// exports.getAllFound = (petType) =>{
//     return new Promise((resolve, reject) => {
//         resolve(store.getAllFound(petType));
//     })
// }

exports.updateLostFound = (id, data) => {
    return new Promise(async (resolve, reject) => {
        if(!id || !data || ( data.length === 0 )){
            console.error('[updatePet controller error] Faltan datos');
            reject('Invalid data');
            return false;
        }
        const result = await store.updateLostFound(id, data);

        resolve(result);
    })
}

exports.deleteLostFound = (id) => {
    return new Promise(async (resolve,reject) => {
        if (!id) {
            console.error('[deletePet controller error] Debe indicarse un id válido');

            reject('Id no válido');
            return false;
        }

        store.deleteLostFound(id)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e);
                console.error('[deletePet controller error]' + e);
            })
    })
}