export class User{
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    img: string | undefined;
    prefs: {
        locs: Array<string>;
        categs: Array<string>;
    }
}