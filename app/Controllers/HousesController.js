import { appState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function drawHouses() {
  let template = ""
  appState.houses.forEach(house => template += house.HouseTemplate)
  setHTML("listings", template)
}

function drawHouseForm() {
  let template = appState.houseFormTemplate
  setHTML("offcanvas-body", template)
}

export class HousesController {
  constructor() {
    appState.on("houses", drawHouses)
  }

  showHouses() {
    drawHouses()
    drawHouseForm()
  }

  addHouse() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)

      housesService.addHouse(formData)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("addHouse", error)
    }
  }
}
