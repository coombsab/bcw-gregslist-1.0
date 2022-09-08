import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', Car)

  /** @type {import('./Models/Job').Job[]} */
  jobs = loadState("jobs", Job)

  /** @type {import('./Models/House').House[]} */
  houses = loadState("houses", House)

  carFormTemplate = /*html*/ `
  <form onsubmit="app.carsController.addCar()">
   <div class="form-floating mb-3">
     <input type="text" class="form-control" name="make" required minlength="3" maxlength="20">
     <label for="make">Make</label>
   </div>
  
   <div class="form-floating mb-3">
     <input type="text" class="form-control" name="model" required>
     <label for="model">Model</label>
   </div>
  
   <div class="form-floating mb-3">
     <input type="number" class="form-control" name="year" required min="1886" max="9999">
     <label for="year">Year</label>
   </div>
  
   <div class="form-floating mb-3">
     <input type="number" class="form-control" name="price" required min="0">
     <label for="price">Price</label>
   </div>
  
   <div class="form-floating mb-3">
     <input type="url" class="form-control" name="imgUrl">
     <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
   </div>
  
   <div class="form-floating">
     <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
     <label for="description">Description</label>
   </div>
  
   <div class="d-flex my-4 gap-5 align-items-center">
     <button class="btn" type="reset">Cancel</button>
     <button class="btn btn-primary" type="submit">Submit</button>
   </div>
  `

  jobFormTemplate = /*html*/ `
  <form onsubmit="app.jobsController.addJob()">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="company" required minlength="2" maxlength="20">
      <label for="company">Company</label>
    </div>
  
    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="jobTitle" required>
      <label for="jobTitle">Job Title</label>
    </div>
  
    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="hours" required min="1" max="200">
      <label for="hours">Hours per week</label>
    </div>
  
    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="rate" required min="0">
      <label for="rate">Rate in $ per hour</label>
    </div>
    
    <div class="form-floating">
      <textarea class="form-control" placeholder="Describe your job" name="description"></textarea>
      <label for="description">Description</label>
    </div>
  
    <div class="d-flex my-4 gap-5 align-items-center">
      <button class="btn" type="reset">Cancel</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  `

  houseFormTemplate = /*html*/ `
  <form onsubmit="app.housesController.addHouse()">
    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="bedrooms" required min="1">
      <label for="bedrooms">Number of Bedrooms</label>
    </div>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" name="bathrooms" required min="1">
      <label for="bathrooms">Number of Bathrooms</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="levels" required min="1">
      <label for="levels">Number of Floors/Levels</label>
    </div>

    <div class="form-floating mb-3">
      <input type="url" class="form-control" name="imgUrl" required>
      <label for="imgUrl">URL for picture of House</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="year" required min="1000">
      <label for="year">Year House was Built</label>
    </div>

    <div class="form-floating mb-3">
      <input type="number" class="form-control" name="price" required min="0">
      <label for="price">Selling Price</label>
    </div>
    
    <div class="form-floating">
      <textarea class="form-control" placeholder="Describe your job" name="description"></textarea>
      <label for="description">Description</label>
    </div>

    <div class="d-flex my-4 gap-5 align-items-center">
      <button class="btn" type="reset">Cancel</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  `
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
