export default interface AdminVolunteer {
    id: number,
    email: string,
    name: string,
    restrictions: string,
    signup_date: string,
    start_date: string,
    is_accepted: boolean;
}