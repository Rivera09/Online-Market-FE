import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { THttpResponse } from 'contants';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export const post = <T extends Object>(
  http: HttpClient,
  route: string,
  body: Record<string, unknown>
): Observable<THttpResponse<T>> => {
  return http.post(environment.apiUrl + route, body, httpOptions) as Observable<
    THttpResponse<T>
  >;
};
