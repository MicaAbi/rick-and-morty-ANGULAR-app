export interface UserRegisterPost {
    name:     string;
    mail:     string;
    password: string;
    address?:  Address;
    phone?:    string;
    birthday?: Date;
}

export interface Address {
    street:   string;
    location: string;
    city:     string;
    country:  string;
    cp:       string;
}
