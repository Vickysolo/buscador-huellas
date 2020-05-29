const store = require('./locator');

exports.addPet = (pet) => {

    return new Promise((resolve, reject) => {
        if (!pet.animalType) {
            console.error('[addPet controller error] Debe indicarse el tipo de animal');
            reject('Debe indicarse el tipo de animal');
            return false;
        }

        store.addPet(pet);

        resolve(pet);
    })
   
}

exports.getPets = (filterPet) =>{
    return new Promise((resolve, reject) => {
        resolve(store.getPets(filterPet));
    })
}

exports.updatePet = (id, data) => {
    return new Promise(async (resolve, reject) => {
        if(!id || !data || ( data.length === 0 )){
            console.error('[updatePet controller error] Faltan datos');
            reject('Invalid data');
            return false;
        }
        const result = await store.updatePet(id, data);

        resolve(result);
    })
}

exports.deletePet = (id) => {
    return new Promise(async (resolve,reject) => {
        if (!id) {
            console.error('[deletePet controller error] Debe indicarse un id válido');

            reject('Id no válido');
            return false;
        }

        store.deletePet(id)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e);
                console.error('[deletePet controller error]' + e);
            })
    })
}