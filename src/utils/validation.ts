import Iplace from "../interfaces/Iplace";

function savePlaceToGoValidation(place: Iplace) {
    if(!place.country.name) {
        throw new Error("Por favor, selecione um país.")
    }

    if(!place.local) {
        throw new Error("Por favor, informe o local.")
    }

    if(!place.target) {
        throw new Error("Por favor, defina uma meta.")
    }
}

export default savePlaceToGoValidation;