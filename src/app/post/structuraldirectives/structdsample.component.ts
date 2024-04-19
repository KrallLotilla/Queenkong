// structdsample.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'structdsample-root',
  templateUrl: './structdsample.component.html',
  styleUrls: ['./structdsample.component.css']
})
export class StructDSampleComponent {
  // Sample data
  users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 }
  ];

  // Function to filter users based on age
  filterUsers(age: number) {
    return this.users.filter(user => user.age >= age);
  }
}
