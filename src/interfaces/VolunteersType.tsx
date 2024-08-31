export default interface Volunteer{
    name: string,
    email: string,
    start_date: Date,
    category: BigInteger,
    restrictions?: string
}