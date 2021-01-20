export default interface Iplace {
    id?: number,
    country: {
        name: string;
        flag: string;
    };
    local: string;
    target: string
}