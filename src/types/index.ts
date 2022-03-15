export interface Country{
  name:{
    common: string;
    official:string;
  }
  flags:{
    png: string;
    svg: string;
  }
  translations:{
    por:{
      official: string;
      common: string;
    }
  }
}

export interface CountriesResponse{
  name: string,
	local: string,
	meta: string,
  flag: string,
}