import { Observable, take, catchError, of } from "rxjs";
import api from '../RestApiConfig/swqa-http-calls-config';


const getWheatherData = <T>(url: string): Observable<T[]> => {
    return api.get<T[]>(url)
        .pipe(
            take(1),
            catchError(err => of(console.log(err , "ERROR IN SERVICE getWheatherData")))
        ) as Observable<T[]>;
};

export default {getWheatherData};