// import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
// import {User} from "../interfaces";
// import {Observable} from "rxjs";
// import {environment} from "../../../environments/environment";
// import {tap} from "rxjs/operators";
//
// @Injectable()
//
// export class AuthService {
//
//   private http!: HttpClient
//
//   get token(): string {
//     return ''
//   }
//
//   constructor(http: HttpClient) {
//     this.http = http
//   }
//
//   login(user: User): Observable<any>{
//     return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
//       .pipe(
//         tap(this.setToken)
//       )
//   }
//
//   logout(){
//
//   }
//
//   isAuthenticated(): boolean {
//     return !!this.token
//   }
//
//   private setToken(response: any) {
//     console.log(response)
//   }
// }
