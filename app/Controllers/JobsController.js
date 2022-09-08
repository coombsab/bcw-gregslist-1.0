import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function drawJobs() {
  let template = ""
  appState.jobs.forEach(job => template += job.JobTemplate)
  setHTML('listings', template)
}

function drawJobTemplate() {
  let template = appState.jobFormTemplate
  setHTML("offcanvas-body", template)
}


export class JobsController {
  constructor() {
    // console.log('the jobs controller')
    appState.on("jobs", drawJobs)
  }

  showJobs() {
    drawJobs()
    drawJobTemplate()
  }

  addJob() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)

      jobsService.addJob(formData)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("addJob", error)
    }
  }
}