import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AccueilCourtierService } from './accueil-courtier.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MessageService } from '../messages/message.service';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ConfigurationService } from '../configuration.service';
import { JustificationUploadable } from '../models/JustificationUploadable';
import { Justification } from '../models/Justification';
import {UtilsService} from "../utils/utils.service";
import {LanguageInjectable} from "../LanguageInjectable";
import {UtilsComponent} from "../utils/utils.component";
import { AccueilCourtierModel} from "../models/AccueilCourtier"

@Component({
  selector: 'accueil-courtier',
  templateUrl: './accueil-courtier.component.html',
  styleUrls: ['./accueil-courtier.component.css'],
  providers: [
    MessageService,
    AccueilCourtierService,
    UtilsService
  ]
})
export class AccueilCourtierComponent implements OnInit {
  @Input() config: string;
  //listJustificatifs: Justification[] = [];
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  public form: FormGroup;
  observableArray: Observable<any>[] = [];
  validation = false;
  filesToUpload: File[] = [];
  filledPjIndexes = [];
  FILE_MAX_SIZE_IN_BYTS = 2000000;
  validateDirty = false;
  currentUserMail : string;
  accueilCourtier : AccueilCourtierModel;
  initFromDb = false ;
  showLigne = false ;
  showNbContratCollectif = false;

  accountAD = 0;
  accountAS = 0;
  accountCC = 0;
  accountCA = 0;

  constructor(private accueilCourtierService: AccueilCourtierService,
              public languageInjectable : LanguageInjectable, private utilsService : UtilsService,
    private messageService: MessageService, private configurationService: ConfigurationService) {
  }

  ngOnInit() {
    this.configurationService.init(this.config);
    new UtilsComponent(this.utilsService, this.languageInjectable);

    this.onGetAccountAd();
    this.onGetAccountAs();
    this.onGetAccountCA();
    this.onGetAccountCC();
    this.onGetConfig();

  }

  onGetConfig(){
    this.accueilCourtierService.getConfig().subscribe(
      (data) => {
        console.log("********** config **************",data)
        this.showLigne = data.showLigne;
        
      }
    )
  }

  onGetAccountAd(){
    this.accueilCourtierService.getCountAd().subscribe(
      (data) => {this.accountAD = data;
        console.log("acountad ************",this.accountAD)
      }
     
    )
    
  }
   

  onGetAccountAs(){
    this.accueilCourtierService.getCountAs().subscribe(
      (data )=> {this.accountAS = data;
      console.log("acountas ***************",this.accountAS)

      }
    )
    

  }

  onGetAccountCC(){
    this.accueilCourtierService.getCountCc().subscribe(
      (data) => {this.accountCC = data;
        console.log("acountcc****************",this.accountCC)

      }
    )

  }

  onGetAccountCA(){
    this.accueilCourtierService.getCountCa().subscribe(
      (data )=> {this.accountCA = data;
        console.log("accountCA *****************",this.accountCA)

      }
     )

     
    
  }

  /* getUserInfo() {
    this.gestionPjService.getUserInfo().subscribe(rep => {
      console.log("get user info rep : ", rep);
      this.currentUserMail = rep.mail;
    });
  } */

  /* getAccueilCourtier(){
  this.accueilCourtierService.getAccueilCourtier().subscribe(
  data => this.accueilCourtier = data;
  )
  } */

}
