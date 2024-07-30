import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChangeMailService} from './change-mail.service';
import {MessageService} from '../messages/message.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ConfigurationService} from '../configuration.service';
import {UtilsService} from "../utils/utils.service";
import {LanguageInjectable} from "../LanguageInjectable";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material";
import {finalize, map} from 'rxjs/operators';
import { Password } from '../models/Password';
import {Email} from "../models/Email";
import {User} from "../models/User";

@Component({
    selector: 'change-mail',
    templateUrl: './change-mail.component.html',
    styleUrls: ['./change-mail.component.css'],
    providers: [
        MessageService,
        ChangeMailService,
        UtilsService
    ]
})
export class ChangeMailComponent implements OnInit, AfterViewInit {
      @Input() config: string;
    showTousInSiteType: string;

    emailError = false;
    emailPatternError: boolean = false;
    Mail = new Email();

    @ViewChild('myForm', {static: false}) myForm: NgForm;
    currentUserMail: string;

    messageErrorConfirmMail: boolean = false;

    MailUpdated = false;

    submitted: boolean = false;
    isChange: boolean = false;

    constructor(private dialog: MatDialog, private fb: FormBuilder,
                private dynamicChangeMailService: ChangeMailService, public languageInjectable: LanguageInjectable, private utilsService: UtilsService,
                private messageService: MessageService, private configurationService: ConfigurationService) {

    }

    ngOnInit() {
        console.info('ngOnInit!');

        this.configurationService.init(this.config);
        this.utilsService.initLanguage().subscribe(rep => {
            this.languageInjectable.property = rep;
            this.showTousInSiteType = this.languageInjectable.property['admin.portail.show.valeur.tous.site.type'];

        });

        this.getUserInfo();
        console.log("bnj", this.currentUserMail);
    }


    resetForm() {
        this.myForm.reset();
        location.reload();
    }

    ngAfterViewInit(): void {
        console.info('AfterViewInit!');
    }

    submit() {
        console.log(this.Mail.newEmail);
        console.log(this.Mail.confirmationEmail);

        this.submitted = true;

        this.emailPatternError = false;
        if (this.Mail.newEmail === this.Mail.confirmationEmail) {
            this.messageErrorConfirmMail = false;
            console.log(this.messageErrorConfirmMail)
        } else {

            this.messageErrorConfirmMail = true;
            console.log(this.messageErrorConfirmMail);
        }
        if ((!this.validEmail(this.Mail.newEmail))) {
            console.log("in valid email*********");
            this.emailPatternError = true;
            console.log(this.emailPatternError);
        }
        if (this.Mail.newEmail === this.Mail.confirmationEmail) {

        this.dynamicChangeMailService.ChangerEmail(this.Mail).subscribe((rest: any) => {
                if (rest) {
                    this.isChange = true;
                    this.currentUserMail = rest.newEmail;
                }
            },
            error => {
                this.isChange = false;
            }
        )

    }
}
    validEmail(email) {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        this.emailPatternError = !re.test(String(email).toLowerCase());
        return re.test(String(email).toLowerCase());
    }



    getUserInfo() {
        this.dynamicChangeMailService.getUserInfo().subscribe(rep => {
            console.log("get user info rep : ", rep);
            console.log("get user info rep : ", rep.email);
            this.currentUserMail = rep.email;

        });
    }

}
