import { Injectable } from "@angular/core";
import { FormControl, ValidatorFn } from "@angular/forms";
import { TestData } from "../data/test-data";
import { User } from "../model/user";

@Injectable({
  providedIn: "root"
})
export class ControlService {

  // constructor() { }

  getAllUserList(): TestData {
    return TestData.studentList;
  }

  searchId (list: TestData, id: number): TestData {
    let j = 0;
    while (list[j]) {
      const user: User = list[j];
      if (user.id === id) {
        return user;
      }
      j++;
    }
  }

  searchNameOrFamily (list: TestData, query: string): object {
    const returnArray = [];
    let j = 0;
    while (list[j]) {
      const user: User = list[j];
      if (user.name === query || user.surname === query) {
        returnArray.push(user.id);
        user.status.findedUser = "active";
      } else {
        user.status.findedUser = "default";
      }
      j++;
    }
    return returnArray;
  }

  filterStudent(list: TestData, points: number, age: number): TestData {
    const returnArray = [];
    let j = 0;
    if (!points && !age) {
      while (list[j]) {
        const user: User = list[j]; //
          returnArray.push(user);
        j++;
      }
    } else {
      if (points && !age) {
        while (list[j]) {
          const user: User = list[j]; //
          if (user.points === points) {
            returnArray.push(user);
          }
          j++;
        }
      }
      if (age && !points) {
        while (list[j]) {
          const user: User = list[j]; //
          if (user.date.getFullYear() === age) {
            returnArray.push(user);
          }
          j++;
        }
      }
      if (points && age) {
        while (list[j]) {
          const user: User = list[j];
          if (user.points === points && user.date.getFullYear() === age) {
            returnArray.push(user);
          }
          j++;
        }
      }
      return returnArray;
    }
  }

  uniquePoinst(list: TestData): object {
    let i = 0;
    const returnArray = [];
    while (list[i]) {
      const user: User = list[i];
      if (!returnArray.includes(user.points)) {
        returnArray.push(user.points);
      }
      i++;
    }
    return returnArray.sort();
  }

  uniqueAge(list: TestData): object {
    let i = 0;
    const returnArray = [];
    while (list[i]) {
      const user: User = list[i];
      if (!returnArray.includes(user.date.getFullYear())) {
        returnArray.push(user.date.getFullYear());
      }
      i++;
    }
    return returnArray.sort();
  }

  badModeOn (list: TestData): object {
    const returnArray = [];
    let j = 0;
    while (list[j]) {
      const user: User = list[j];
      user.points <= 3 ? user.status.badPoints = true : user.status.badPoints = false;
      returnArray.push(user);
      j++;
    }
    return returnArray;
  }

  detele (list: TestData, id: number): object {
    const returnArray = [];
    let j = 0;
    while (list[j]) {
      const user: User = list[j];
      if (user.id !== id) {
        returnArray.push(user);
      }
      j++;
    }
    return returnArray;
  }

  sortList (list: TestData, sortType: string): object {
    const returnArray = [];
    let j = 0;
    while (list[j]) {
      const user: User = list[j];
      returnArray.push(user);
      j++;
    }
    // ------
    switch (sortType) {
      case "id": {
        returnArray.sort((a: User, b: User) => a.id < b.id ? -1 : 1);
        break;
      }
      case "name" : {
        returnArray.sort((a: User, b: User) => a.name < b.name ? -1 : 1);
        break;
      }
      case "surname" : {
        returnArray.sort((a: User, b: User) => a.surname < b.surname ? -1 : 1);
        break;
      }
      case "patronymic" : {
        returnArray.sort((a: User, b: User) => a.patronymic < b.patronymic ? -1 : 1);
        break;
      }
      case "age" : {
        returnArray.sort((a: User, b: User) =>
        +`${a.date.getFullYear()}${("0" + a.date.getMonth()).slice(-2)}${("0" + a.date.getDate()).slice(-2)}`
        < +`${b.date.getFullYear()}${("0" + b.date.getMonth()).slice(-2)}${("0" + b.date.getDate()).slice(-2)}` ? -1 : 1);
        break;
      }
      case "points" : {
        returnArray.sort((a: User, b: User) => a.points < b.points ? -1 : 1);
        break;
      }
      case  "group" : {
        returnArray.sort((a: User, b: User) => a.group < b.group ? -1 : 1);
        break;
      }
    }
    return returnArray;
  }

  // VALIDATORS
  nameValid (surname: FormControl, name: FormControl, pat: FormControl): ValidatorFn {
    console.log(name.value, surname.value, pat.value);
    return null;
  }
}
