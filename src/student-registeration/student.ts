import { Person } from "./person";
import { PersonData, StudentData } from "./types";

export default class Student extends Person{ //this is inheritance
    private _matriculationNumber: string;
    public get matriculationNumber(): string {
        return this._matriculationNumber;
    }
    public set matriculationNumber(value: string) {
        this._matriculationNumber = value;
    }
    private _programOfStudy: string;
    public get programOfStudy(): string {
        return this._programOfStudy;
    }
    public set programOfStudy(value: string) {
        this._programOfStudy = value;
    }
    private _department: string;
    public get department(): string {
        return this.toTitleCase(this._department);
    }
    public set department(value: string) {
        this._department = value;
    }
    private _yearOfEntry: Date;
    public get yearOfEntry(): Date {
        return this._yearOfEntry;
    }
    public set yearOfEntry(value: Date) {
        this._yearOfEntry = value;
    }
    private _modeOfEntry: number | undefined;
    public get modeOfEntry(): number | undefined {
        return this._modeOfEntry;
    }
    public set modeOfEntry(value: number | undefined) {
        this._modeOfEntry = value;
    }
    private _nextOfKin: string | undefined;
    public get nextOfKin(): string | undefined {
        return this._nextOfKin;
    }
    public set nextOfKin(value: string | undefined) {
        this._nextOfKin = value;
    }
    private _emailAddress: string | undefined;
    public get emailAddress(): string | undefined {
        return this._emailAddress;
    }
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    }
    private _phoneNumber: string | undefined;
    public get phoneNumber(): string | undefined {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    }

    constructor(studentData: StudentData, personData: PersonData){
        super(personData); //inheritance. Pass personData to the superclass.
        this._department = studentData.department;
        this._emailAddress = studentData.emailAddress;
        this._matriculationNumber = studentData.matriculationNumber;
        this._modeOfEntry = studentData.modeOfEntry;
        this._nextOfKin = studentData.nextOfKin;
        this._phoneNumber = studentData.phoneNumber;
        this._programOfStudy = studentData.programOfStudy;
        this._yearOfEntry = studentData.yearOfEntry;
    }
}
