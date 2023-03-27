import { Address, Header } from "./loginResponse.interface";

export interface RegisterResponse {
    header: Header;
    data:   Data;
}

export interface Data {
    user: UserRegis;
}

export interface UserRegis {
    id:       string;
    role:     string;
    name:     string;
    mail:     string;
    address:  Address;
    birthday: null;
    phone:    string;
    date:     Date;
}