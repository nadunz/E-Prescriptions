export class Patient {

    name: string;
    nic: string;// as patient id
    gender: string;// male | female
    regDate: string;
    email:string;
    phone:string;
  
    constructor(name: string,nic: string,gender: string,regDate: string,email:string,phone:string) {
        
        this.name = name;
        this.nic = nic;
        this.gender = gender;
        this.regDate= regDate;
        this.email = email;
        this.phone = phone;

    }

};