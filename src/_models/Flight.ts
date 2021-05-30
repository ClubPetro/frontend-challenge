import Country from "./Country";

/**
 * Modelo de meta de vôo.
 */
export default interface Flight{
    id?: number;
    country: Country;
    city: string;
    date: string;
}