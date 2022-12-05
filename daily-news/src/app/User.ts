export class User{
    id: number;
    name: string | undefined;
    email: string | undefined;
    password: string;
    phone: number;
    prefs: {
        locs: Array<string>;
        categs: Array<string>;
    }
}