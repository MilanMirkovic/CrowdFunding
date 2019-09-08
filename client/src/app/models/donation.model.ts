import { UserInterface } from './user.model';
import { ProjectInterface } from './project.model';

export interface DonationInterface {
    id?: number;
    user: UserInterface;
    donation: number;
    project?: ProjectInterface;




}


export class Donation implements DonationInterface {

    id: number;
    user: UserInterface;
    donation: number;
    project?: ProjectInterface;

    constructor(donation: DonationInterface) {
        this.id = donation.id;
        this.user = donation.user;
        this.donation = donation.donation;
        this.project = donation.project;
    }
}