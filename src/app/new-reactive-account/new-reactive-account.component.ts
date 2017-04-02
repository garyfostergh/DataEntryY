import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
    return c.get('password').value === c.get('confirm').value
        ? null : { 'nomatch': true }
}



@Component({
    selector: 'aap-new-reactive-account',
    templateUrl: './new-reactive-account.component.html',
    styleUrls: ['./new-reactive-account.component.css']
})
export class NewReactiveAccountComponent implements OnInit {
    form: FormGroup;

    constructor(public fb: FormBuilder) {
        this.form = this.fb.group({
            first: '',
            last: '',
            // create a group called account - see html tag <div formGroupName="account">
            account: this.fb.group({
                username: '',
                password: ['', Validators.required],
                confirm: ['', Validators.required],
            }, { validator: passwordMatcher }),

            thisQuestion: ''
        });
        // this.form.setValue is preferred method for error checking etc- it has more functionality than patchValue
        this.form.patchValue({
            first: 'Nancy',
            last: 'Drew'
        })
    }

    ngOnInit() {
    }

}
