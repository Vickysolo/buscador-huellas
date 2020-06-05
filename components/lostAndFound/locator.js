const Model = require('./model');

exports.addNewLostFound = (pet) => {
    const petInfo = new Model(pet);
    return petInfo.save();
}

exports.getAllLostFound = async (petStatus, animalType) => {
    let filter = {};
    if ( petStatus != null) {
        filter.status = petStatus ;
    }
    if (animalType !== null){
        filter.pet = animalType;
    }
    const pets = await Model.find(filter);
    return pets;
}

exports.updateLostFound = async (id, data)  => {
    
   
    return Model.findOneAndUpdate( {
        "_id": id
    },
    { 
        ...data
    
    }
    ).then((response) =>
     console.log(response) )
    .catch((e) => {console.log(e)})
}

exports.deletePet = (id) => {
    return Model.deleteOne({
        _id: id
    })
}
