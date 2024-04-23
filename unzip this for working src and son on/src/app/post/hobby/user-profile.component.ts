// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Hobby } from './hobby.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      hobbies: this.fb.array([])
    });
  }

  get hobbies() {
    return this.userProfileForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(
      this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required]
      })
    );
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    // Handle form submission, e.g., save to backend using UserService
  }
}
