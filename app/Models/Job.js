/**
 * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string}} Job
 */

export class Job {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }
  get JobTemplate() {
    return /*html*/`
      <div class="col-md-4 col-lg-3 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="text-uppercase">
              ${this.jobTitle} with ${this.company}
            </h5>
            <p>
              <strong>$${this.rate} per hr</strong>
            </p>
            <p>${this.hours} per week</p>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    `
  }
}


// NOTE Job object requirements
// {
//   "company": {
//     "type": "String",
//     "required": true
//   },
//   "jobTitle": {
//     "type": "String",
//     "required": true
//   },
//   "hours": {
//     "type": "Number",
//     "required": true
//   },
//   "rate": {
//     "type": "Number",
//     "required": true
//   },
//   "description": {
//     "type": "String"
//   }
// }
