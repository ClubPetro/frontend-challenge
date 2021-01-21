export default interface ICard {
    id?: string;
    countryName: string;
    countryFlag: string;
    local: string;
    target: string;
    handleEditButtonClick: Function;
    handleRemoveButtonClick: Function;
}