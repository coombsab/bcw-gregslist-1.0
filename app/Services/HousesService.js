import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

class HousesService {
  addHouse(formData) {
    let house = new House(formData)
    appState.houses = [house, ...appState.houses]
    saveState("houses", appState.houses)
  }
}

export const housesService = new HousesService()