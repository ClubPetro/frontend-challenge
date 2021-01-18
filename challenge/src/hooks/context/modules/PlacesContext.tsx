import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
  ReactNode,
  useRef,
} from 'react';
import uniqid from 'uniqid';
import swal from 'sweetalert';
import useOutsideClick from '../../useOutsideClick';
import { apiCountries, api } from '../../../services/api';

interface ItemProps {
  id?: string;
  flag?: string;
  country: string;
  place: string;
  goal: string;
}

interface PlacesContextData {
  loadPlaces: () => void;
  addPlace: (values: ItemProps) => void;
  editPlace: (id: string, values: ItemProps) => void;
  deletePlace: (id: string) => void;
  modalEditCountry: (id?: string) => void;
  modalEdit?: boolean;
  itemId: any;
  refModalEdit: any;
  places: ItemProps[];
}

interface ProviderProps {
  children?: ReactNode;
}

const PlacesContext = createContext<PlacesContextData>({} as PlacesContextData);

const PlacesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [places, setPlaces] = useState<any>([]);

  const [modalEdit, setModalEdit] = useState(false);

  const [itemId, setItemId] = useState<string>();

  // GET

  const loadPlaces = useCallback(async () => {
    const response = await api.get('places');
    const { data } = response;
    setPlaces(data);
  }, [setPlaces]);

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  // ADD

  async function addPlace(values: ItemProps) {
    try {
      const flagResp = await apiCountries.get(`name/${values.country}`);
      const [result] = flagResp.data;

      if (flagResp) {
        const response = await api.post('/places', {
          id: uniqid(),
          flag: result.flag,
          country: result.translations.br,
          place: values.place,
          goal: values.goal,
        });
        swal('Adicionado!', 'O item foi adicionado com sucesso!', 'success');

        setPlaces([...places, response.data]);
      }
    } catch {
      swal('Erro!', 'Verifique os campos!', 'error');
    }
  }

  // EDIT

  async function editPlace(id: string, values: ItemProps) {
    try {
      await api.put(`/places/${id}`, {
        ...values,
        place: values.place,
        goal: values.goal,
      });
      swal('Editado!', 'O item foi editado com sucesso!', 'success');
      loadPlaces();
    } catch {
      swal('Erro!', 'Verifique os campos!', 'error');
    }
  }

  const modalEditCountry = (id?: string) => {
    setModalEdit(!modalEdit);
    setItemId(id);
  };

  const refModalEdit: any = useRef();

  useOutsideClick(refModalEdit, (): void => {
    if (modalEdit) {
      setModalEdit(false);
    }
  });

  // DELETE

  const deletePlace = (id: string) => {
    swal({
      title: 'Tem certeza que quer deletar?',
      text: 'O item será deletado',
      icon: 'warning',
      buttons: ['Não', 'Sim'],
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        api
          .delete(`places/${id}`)
          .then(() => {
            if (willDelete) {
              swal('O item foi deletado com sucesso!', {
                icon: 'success',
              });
              loadPlaces();
            }
          })
          .catch(() => {
            swal('Falhou', 'Há algo errado', 'warning');
          });
      }
    });
  };

  return (
    <PlacesContext.Provider
      value={{
        places,
        loadPlaces,
        addPlace,
        editPlace,
        deletePlace,
        modalEditCountry,
        refModalEdit,
        modalEdit,
        itemId,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

function usePlaces(): PlacesContextData {
  const context = useContext(PlacesContext);

  if (!context) {
    throw new Error('usePlaces must be used within an PlacesProvider');
  }
  return context;
}
export { PlacesProvider, usePlaces };
