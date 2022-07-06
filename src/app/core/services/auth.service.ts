import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, iif, map, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(new User())
  public authStatus$ = new BehaviorSubject<boolean>(true)
  private $user = this._user.asObservable()
  constructor(
    private api: HttpClient,
    private core: ApiService
  ) {

  }
  fetchLogin(user: any): Observable<any> {
    return this.core.get('login').pipe(
      tap(console.log),
      map(res => {
        if (res.email == user.email && res.password == user.password) {
          this._user.next({ user: res, isLoggedIn: true })
        } else {
          throw new Error("")
        }
        return { res, status: 200 }
      }),
      catchError(err => {
        throw err
      })
    )
  }
  get user() {
    return this.$user
  }
}
