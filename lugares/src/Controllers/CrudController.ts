interface CountrieProps {
  country: {
    name: string;
    flag: string;
  };
  goal: string;
  location: string;
}

class CrudController {
  public create(obj: CountrieProps) {
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
}

export default new CrudController();
