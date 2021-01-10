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
  public create(obj: CountryProps) {
    const body = JSON.stringify(obj);

    fetch("http://localhost:3000/countries", {
      body,
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
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

    fetch(`http://localhost:3000/countries/${id}`,{
      method: "PATCH",
      body,
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then(resposne => console.log(resposne));

  }
}

export default new CrudController();
