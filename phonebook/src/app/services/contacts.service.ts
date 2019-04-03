import { Injectable } from '@angular/core';
import { Http } from '@angular/http';//IT IS AN SUB PACKAGE
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http) { }

//1.recieve the data from component
create ( contactObj ){
  console.log( contactObj );
  //2.send the same data rest api
return this.http.post('http://localhost:3000/api/contacts/',contactObj)
//3.recieve response from rest api
.pipe(map(response => {
  console.log(response);
  //4.send the same response to component
  return response.json();
}));
}

getContact(){
  return this.http.get('http://localhost:3000/api/contacts/')
  //3.recieve response from rest api
  .pipe(map(response => {
    console.log(response);
    //4.send the same response to component
    return response.json();
  }));
}
getContactid(id=1){
  return this.http.get('http://localhost:3000/api/contacts/'+id)
  //3.recieve response from rest api
  .pipe(map(response => {
    console.log(response);
    //4.send the same response to component
    return response.json();
  }));

}
updateContactById(contactObj) {
  return this.http.put('http://localhost:3000/api/contacts/'+contactObj.contactId, contactObj)
  .pipe(map(response => { //3. Receive resp from rest api
  console.log(response);
  return response.json(); //4. Send the some resp to component thru service
  }));
  }

  deleteContactByUserId(contactObj) {
    return this.http.delete('http://localhost:3000/api/contacts/'+contactObj.contactId)
    .pipe(map(response => { //3. Receive resp from rest api
    console.log(response);
    return response.json(); //4. Send the some resp to component thru service
    }));
    }

}

