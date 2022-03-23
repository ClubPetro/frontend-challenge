import { useEffect, useState, useRef } from 'react';
import Header from 'src/components/Header/Header';
import { Main, Card } from './Home.styles';
import { InputBase } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from 'src/components/Select/Select';
import InputMask from 'react-input-mask';
import {
  deletePlace,
  getCountries,
  getPlaces,
  setPlace,
  updatePlace
} from 'src/services/api';
import { closeIcon, editIcon } from 'src/assets/svg';
import Modal from 'src/containers/Modal';

const RenderBody = (
  data: any,
  funcs: any,
  inputs: InputsRef,
  inputsRef: any,
  inputMask: any
) => {
  const { handleAddPlace, handleDeletePlace, setModalData } = funcs;
  const { maskRef } = inputMask;
  return (
    <>
      <section className='add__content'>
        <div className='main__container'>
          <Grid container alignItems={'flex-end'} spacing={4}>
            <Grid
              style={{
                position: 'relative'
              }}
              item
              lg={3}
              md={4}
              xs={12}
            >
              <span>País</span>
              <Select
                countries={data.countries}
                currentValue={inputs.current.country}
                selectCountry={(value: any) => {
                  const countrySelected = data.countries.find(
                    (country: any) => country.translations.br === value
                  );

                  inputs.current.country.flag = countrySelected.flag;
                  inputs.current.country.name = countrySelected.translations.br;
                }}
              />
            </Grid>
            <Grid item lg={5} md={4} xs={12}>
              <span>Local</span>
              <InputBase
                inputRef={inputsRef.localRef}
                onChange={(event: any) => {
                  inputs.current.local = event.target.value;
                }}
                placeholder='Digite o local que deseja conhecer'
                sx={customInputStyle}
              />
            </Grid>
            <Grid item lg={2} md={2} xs={12}>
              <span>Meta</span>
              {maskRef.current}
            </Grid>
            <Grid item lg={2} md={2} xs={12}>
              <Button
                sx={customButtonStyle}
                onClick={() => handleAddPlace(inputs.current)}
                variant='contained'
              >
                Adicionar
              </Button>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className='view__content'>
        <div className='main__container'>
          <Grid container alignItems={'flex-end'} spacing={4}>
            {data.user.places &&
              data.user.places.map((place: any) => (
                <Grid
                  key={place.id}
                  style={{
                    position: 'relative'
                  }}
                  item
                  lg={3}
                  md={4}
                  xs={12}
                >
                  <Card>
                    <div className='card__head'>
                      <img
                        loading='lazy'
                        width='70'
                        height='70'
                        src={place.country.flag}
                        alt='Flag'
                      />

                      <img
                        loading='lazy'
                        width='15'
                        src={closeIcon}
                        onClick={() => handleDeletePlace(place.id)}
                        alt='Close'
                      />
                      <img
                        loading='lazy'
                        width='15'
                        onClick={() =>
                          setModalData((current: any) => ({
                            ...current,
                            dataId: place.id,
                            open: true
                          }))
                        }
                        src={editIcon}
                        alt='Edit'
                      />
                    </div>
                    <div className='card__body'>
                      <div className='card__body__header'>
                        <h3>{place.country.name}</h3>
                      </div>
                      <div className='card__body__content'>
                        <p>{`Local: ${place.local}`}</p>
                        <p>{`Meta: ${place.meta}`}</p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

function Home() {
  const [data, setData] = useState<State<Inputs>>({
    countries: null,
    user: {
      places: null
    }
  });

  const [modalData, setModalData] = useState<ModalProps>({
    open: false,
    dataId: null
  });

  const inputs = useRef<Inputs>({
    country: {
      flag: '',
      name: ''
    },
    local: '',
    meta: ''
  });

  const localRef = useRef<any>();
  const metaRef = useRef<any>();
  const maskRef = useRef<any>(
    <InputMask
      mask='99/9999'
      alwaysShowMask={false}
      onChange={(event: any) => {
        inputs.current.meta = event.target.value;
      }}
    >
      {() => (
        <InputBase
          inputRef={metaRef}
          placeholder='mês/ano'
          sx={customInputStyle}
        />
      )}
    </InputMask>
  );

  const handleAddPlace = async (values: Inputs) => {
    if (inputsValidation(values)) {
      await setPlace(values);
      const places = await getPlaces();

      inputs.current.country = {
        flag: '',
        name: ''
      };
      inputs.current.local = '';
      inputs.current.meta = '';
      localRef.current.value = '';
      metaRef.current.value = '';

      setData(currentData => ({
        ...currentData,
        user: {
          places: places
        }
      }));
    } else alert('Verifique os campos!');
  };

  const handleDeletePlace = async (id: string) => {
    await deletePlace(id);
    const places = await getPlaces();

    setData(currentData => ({
      ...currentData,
      user: {
        places: places
      }
    }));
  };

  const handleEdit = async (values: any) => {
    if (modalData.dataId) {
      await updatePlace(modalData.dataId, values);
      const places = await getPlaces();

      setData(current => ({
        ...current,
        user: {
          places: places
        }
      }));
      setModalData(current => ({
        ...current,
        open: false
      }));
    }
  };

  useEffect(() => {
    (async () => {
      const countries = await getCountries();
      const places = await getPlaces();

      setData(currentData => ({
        ...currentData,
        countries,
        user: {
          places: places ?? null
        }
      }));
    })();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {RenderBody(
          data,
          { handleAddPlace, handleDeletePlace, setModalData },
          inputs,
          { localRef },
          { maskRef }
        )}
      </Main>
      <Modal
        modalData={modalData}
        setModalData={setModalData}
        values={data.user.places}
        handleEdit={handleEdit}
      />
    </>
  );
}

const inputsValidation = (values: Inputs) =>
  values.country.flag &&
  values.country.name &&
  values.local &&
  values.meta.match(/^([0-9]{2})\/([0-9]{4})$/);

const customButtonStyle = {
  borderRadius: 1.5,
  background: '#006C18',
  fontWeight: 'normal',
  fontSize: 16,
  textTransform: 'capitalize',
  boxShadow: 0,
  height: 50,
  width: 1,
  ':hover': {
    background: '#0e7d28',
    boxShadow: 0
  }
};

const customInputStyle = {
  background: '#ffffff',
  borderRadius: 1.5,
  height: 50,
  width: '100%',
  paddingLeft: '10px'
};

export default Home;
