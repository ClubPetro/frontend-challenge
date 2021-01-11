interface CountryProps {
  country: {
    name: string;
    flag: string;
  };
  goal: string;
  location: string;
}

interface UpdateProps {
  goal?: string;
  location?: string;
}

class CrudController {
  public async create(obj: CountryProps) {
    const body = JSON.stringify(obj);


  const country = await fetch("http://localhost:3000/countries", {
      body,
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then(country => country.json());

    return country;

  }

  public async index() {
    const response = await fetch(
      "http://localhost:3000/countries"
    ).then((response) => response.json());

    return response;
  }

  public async delete(id:string){

    fetch(`http://localhost:3000/countries/${id}`,{
      method: "DELETE",
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then(resposne => console.log(resposne));

  }

  public async update(id:string,updateValues:UpdateProps ){

    const body = JSON.stringify(updateValues);

    const newValue = await fetch(`http://localhost:3000/countries/${id}`,{
      method: "PATCH",
      body,
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then(resposne => resposne.json());

    return newValue;

  }
}

export default new CrudController();
