export enum Gender {
    female = 1,
    male = 2
}

export enum ModeOfEntry{
    UTME = 1,
    DirectEntry = 2,
    Transfer = 3
}

export interface PersonData {
    firstName: string,
    lastName: string,
    gender: Gender,
    height?: number, //question mark here means optional
    hobbies: string[],
    birthday?: Date, //question mark here means optional
    isAlive: boolean
}

export interface StudentData{
    matriculationNumber: string,
    programOfStudy: string,
    department: string,
    yearOfEntry: Date,
    modeOfEntry?: ModeOfEntry,
    nextOfKin?: string,
    emailAddress?: string,
    phoneNumber?: string
}

