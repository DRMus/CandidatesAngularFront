import { Component, OnInit } from '@angular/core';
import {CandidatesService} from "../services/candidates.service";
import {Tech} from "../../../shared/interfaces";

@Component({
  selector: 'app-add-technologies-page',
  templateUrl: './add-technologies-page.component.html',
  styleUrls: ['./add-technologies-page.component.css']
})
export class AddTechnologiesPageComponent implements OnInit {

  private all!: CandidatesService
  technologies!: Tech[]
  inputForAdd = ''
  isSubmited = false
  inBase = false

  constructor(all: CandidatesService) {
    this.all = all
  }

  ngOnInit(): void {
    this.technologies = this.all.technologies
  }

  onSubmit() {
    this.isSubmited = true
    this.technologies.map(tech => {
      if(tech.technology === this.inputForAdd){
        this.inBase = true
        return
      }
    })
    this.isSubmited = false
  }

  onInput(event: any) {
    this.inputForAdd = event.target.value
  }
}
