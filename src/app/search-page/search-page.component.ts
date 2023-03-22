import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalRecordRepository } from '../models/medical-record.repository';
import { MedicalRecord } from '../models/medical-record.model';
import { AuthService } from '../models/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searching: boolean = false;
  searchText =""

  constructor(
    private repository : MedicalRecordRepository,
    private activeRoute : ActivatedRoute,
    private auth: AuthService
  ) { }
  
  async ngOnInit(): Promise<void> {
    await this.repository.setMedicalRecord();
    this.searching = this.activeRoute.snapshot.params["mode"] === "search";
  }

  get medicalRecord(): MedicalRecord[] {
    return this.repository.getMedicalRecord().filter(t => t.owner.id === this.auth.userId);
  }

}
