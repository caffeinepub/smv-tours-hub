import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    vehicleType: string;
    destination: string;
    numPassengers: bigint;
    name: string;
    email: string;
    message: string;
    travelDate: string;
    phone: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getTotalInquiriesCount(): Promise<bigint>;
    submitInquiry(name: string, phone: string, email: string, destination: string, travelDate: string, numPassengers: bigint, vehicleType: string, message: string): Promise<void>;
}
