/**
 * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, description: string}} House
 */
export class House {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }
  get HouseTemplate() {
    return /*html*/`
      <div class="col-md-4 col-lg-3 mb-3">
        <div class="card">
          <img src="${this.imgUrl}" alt="some-house" class="img-fluid">
          <div class="card-body">
            <h5>${this.bedrooms} Bed ${this.bathrooms} Bath ${this.levels} Story House</h5>
            <p>Built in ${this.year}</p>
            <p>$${this.price}</p>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    `
  }
}


// NOTE House object requirements
// {
//   "bedrooms": {
//     "type": "Number",
//     "required": true
//   },
//   "bathrooms": {
//     "type": "Number",
//     "required": true
//   },
//   "levels": {
//     "type": "Number",
//     "required": true
//   },
//   "imgUrl": {
//     "type": "String"
//   },
//   "year": {
//     "type": "Number",
//     "required": true
//   },
//   "price": {
//     "type": "Number",
//     "required": true
//   },
//   "description": {
//     "type": "String"
//   }
// }
