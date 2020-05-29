const Model = require('./model');

exports.addPet = (pet) => {
    const petInfo = new Model(pet);
    return petInfo.save();
}

exports.getPets = async (filterPet) => {
    let filter = {};
    if (filterPet !== null){
        filter = { pet: filterPet };
    }
    const pets = await Model.find(filter);
    return pets;
}

exports.updatePet = async (id, data)  => {
    // const petToUpdate = await Model.findOne({
    //     _id : id
    // })
    // const datapetToUpdate = {_id : id, ...data}
    // const updatedPet = await petToUpdate.save();
    // return updatedPet;
    
   
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
