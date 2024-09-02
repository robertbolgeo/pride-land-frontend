export interface AdminVolunteer {
    id: number,
    email: string,
    name: string,
    restrictions: string,
    signup_date: string,
    start_date: string,
    is_accepted: boolean;
}

export interface MinPutVolunteer {
    name: string,
    email: string,
    start_date: string,
    is_accepted: boolean
}