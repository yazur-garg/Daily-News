export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    prefs: {
        locs: Array<string>;
        categs: Array<string>;
    }
}