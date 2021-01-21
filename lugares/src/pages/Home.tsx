import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import * as service from 'services/api';
import   { capitalize }  from 'helpers';

// Components
import AppTopbar from 'components/Topbar';
import FormAdd from 'components/FormAdd';
import CardList from 'components/CardList';
import FormEdit from 'components/FormEdit';

//---------------------- Interfaces ------------------------//
export interface CountryInterface {
  country: string;
  flag: string;
}

export interface FormDataUpdInterface extends FormDataAddInterface {
  id: string ;
}

export interface FormDataAddInterface {
  country: string;
  flag: string | undefined;
  local: string;
  meta: string;
}

interface CountryesFormDataInterface {
  countryes: Array<FormDataUpdInterface>
}

interface SystemNotification {
  status: boolean,
  message: string, 
  type: string
}

const Home: React.FC = () => {
  //---------------------- States ------------------------//
  var initialState = {
    formAdd: {
      country: '',
      flag: '',
      local: '',
      meta: '',
    },
    formEdit: {
      id: '',
      country: '',
      flag: '',
      local: '',
      meta: '',
    }
  }
 
  // Countryes API
  const [countryes, setCountries] = useState<[CountryInterface]>();

  // Countryes Json Server
  const [formData, setFormData] = useState<CountryesFormDataInterface>({ countryes: [] });  

  // Add
  const [formDataAdd, setFormDataAdd] = useState<FormDataAddInterface>(initialState.formAdd);
  const [onErrorCountry, setOnErrorCountry] = useState(false);
  const [onErrorLocal, setOnErrorLocal] = useState(false);
  const [onErrorMeta, setOnErrorMeta] = useState(false);

  // Edit
  const [sEditForm, setEditForm] = useState<FormDataUpdInterface>(initialState.formEdit)
  const [sEditErrorCountry, setEditErrorCountry] = useState(false)
  const [sEditErrorLocal, setEditErrorLocal] = useState(false)
  const [sEditErrorMeta, setEditErrorMeta] = useState(false)
  const [sEditIdDelete, setEditsEditIdDelete] = useState({id_delete: ''})

  // Notification
  const [open, setOpen] = useState(false);
  const [onDialog, setOnDialog] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [msnNotification, setMsnNotification] = useState({status: false, message: '', type:''}); 

  //---------------------- Methods ------------------------//
  const handleClickOpen = () => setOpen(true);
  const handleClose = () =>   setOpen(false);
  const closeDialog = () => {
    setOnDialog(false);
    setEditsEditIdDelete({id_delete: ''})
  };

  async function loadCountries() {
    try {
      const { data } = await service.getCountryAll();
      let dataFilter: any = [];
      
      // Order By Alphabet
      data.forEach( (t: any) => dataFilter.push({ country: capitalize(t.translations.pt), flag: t.flag }));
      dataFilter.sort((a: any, b: any)=> (a.country > b.country ? 1 : -1));
      setCountries(dataFilter)

    } catch(err) {
      systemNotification({
        status: true, 
        message: 'Ops! Erro ao carregar lista de Países', 
        type: 'error'
      })
    }
  }

  async function loadLugares() {
    try {
      const { data } = await service.getLugaresAll();
      setFormData({countryes:  data})

    } catch(err) {
      systemNotification({
        status: true, 
        message: 'Ops! Erro ao carregar lista de lugares', 
        type: 'error'
      })
    }
  }
  
  async function onSubmitAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let target = event.currentTarget;
    let dataForm  = { ...formDataAdd }

    // Validation
    if(!validateFields(dataForm)) return;

    // Set Add
    try {
      let { data } = await service.create(dataForm);
      setFormData({ countryes:  [data, ...formData.countryes] });
      setFormDataAdd(initialState.formAdd);
      target.country.value = "";
      systemNotification({status: true, message: 'Cadastrado com sucesso', type: 'success'})
      // clear fields
    } catch(err) {
      systemNotification({status: true, message: 'Ops! Houve erro ao cadastrar', type: 'error'})
    }
  }

  const onClickEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idItem: string) => {
    event.preventDefault();
    // Reseet Errors
    resetErrors(); 
    editFormResetErrors();
    clearSystemNotification();

    let result = formData.countryes.find( item => item.id === idItem );
    setEditForm({ ...sEditForm, ...result })
    setOpen(true);
  }

  async function  onSubmitUpdate(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    let form = { ...sEditForm }
    // Validation
    if(!editFormValidateFields(form)) return;
    
    try {
      // Set update
      await service.update(form.id, form);
      let updateItem = [];
      updateItem = formData.countryes.map(item => (item.id === form.id ? { ...item, ...form } : item));
      setFormData({countryes:  updateItem})
      editFormClear();
      setOpen(false);
      systemNotification({status: true, message: 'Atualizado com sucesso', type: 'success'})

    } catch(err) {
      systemNotification({status: true, message: 'Ops! Houve erro ao cadastrar', type: 'error'})
    }
  }

  async function onClickRemove (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  {
    event.preventDefault();
    setOnDialog(false);
   
    if (! sEditIdDelete.id_delete || sEditIdDelete.id_delete === '') {
      alert('ID não existe')
      return;
    }

    try {
      await service.deleteLugaresId(sEditIdDelete.id_delete);
      const removedItem = [...formData.countryes].filter(item => item.id !== sEditIdDelete.id_delete);
      setFormData({ countryes:  removedItem})
      systemNotification({status: true, message: 'Deletado com sucesso', type: 'success'})
    } catch(err) {
      systemNotification({status: true, message: 'Ops! houve um erro ao deletar', type: 'error'})
    }
  }

  const dialogConfirmDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idItem: string  ): void => {
    event.preventDefault();
    setOnDialog(true);
    setEditsEditIdDelete({id_delete: idItem})
  }

  const onChangeFormAdd = (event: { target: HTMLInputElement  } ): void =>  {
    let { name, value } = event.target;
    let values = { [name]: value }
    setFormDataAdd({...formDataAdd, ...values });
    if(name === 'meta') setOnErrorMeta(false);
    if(name === 'local') setOnErrorLocal(false);
  }

  const onChangeFormDataFlag = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    let { name, value, selectedOptions } = event.target;
    let values = { [name]: value };

    if(selectedOptions[0].dataset.flag !== '') {
      let values = { [name]: value , flag: selectedOptions[0].dataset.flag };
      setFormDataAdd({...formDataAdd,  ...values });
    } else {
      setFormDataAdd({...formDataAdd,  ...values });
    }

    setOnErrorCountry(false);
  }

  const editFormChangeFlag = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    let { name, value, selectedOptions } = event.target;
    let values = { [name]: value };

    if(selectedOptions[0].dataset.flag !== '') {
      let values = { [name]: value , flag: selectedOptions[0].dataset.flag };
      setEditForm({...sEditForm,  ...values });
    } else {
      setEditForm({...sEditForm,  ...values });
    }

    setOnErrorCountry(false);
  }

  const editFormChange = (event: { target: HTMLInputElement }) =>  {
    let { name, value } = event.target;
    let values = { [name]: value }

    setEditForm({...sEditForm,  ...values });

    if(name === 'meta') setOnErrorMeta(false);
    if(name === 'local') setOnErrorLocal(false);
  }

  const systemNotification = (v: SystemNotification) => {
    let valuesMens = {status: v.status, message: v.message, type: v.type};
    setMsnNotification({ ...msnNotification, ...valuesMens });
    window.setTimeout(() => setOpenNotification(true), 500);
  }

  //---------------------- Validates -----------------------//
  const validateFields = (elem: any) => {
    let count = 0;

    // Format: date YY (01|12) / Any YYYY (2021|2099)
    let date_regex = /^(0[1-9]|1[0-2])\/(20[2-9][1-9])$/;  

    if (!elem.country.trim()) {setOnErrorCountry(true); count++;}
    if (!elem.local.trim()) {setOnErrorLocal(true); count++;}
    if (!elem.meta.trim() || !date_regex.test(elem.meta)) {setOnErrorMeta(true);  count++;}
    if(count >= 1) return false;

    return true 
  }

  const editFormValidateFields = (elem: any) => {
    let count = 0;

    // Format: date YY (01|12) / Any YYYY (2021|2099)
    let date_regex = /^(0[1-9]|1[0-2])\/(20[2-9][1-9])$/;  

    if (!elem.country.trim()) {setEditErrorCountry(true); count++;}
    if (!elem.local.trim()) {setEditErrorLocal(true); count++;}
    if (!elem.meta.trim() || !date_regex.test(elem.meta)) {setEditErrorMeta(true);  count++;}
    if(count >= 1) return false;

    return true 
  }

  //---------------- (Clean|Reset) States -----------------//
  const editFormClear = () => {
    setEditForm(initialState.formEdit)
  }

  const clearSystemNotification = () => {
    setMsnNotification({ status: false, message: '', type: ''});
    setOpenNotification(false)
  }

  const resetErrors = () => {
    setOnErrorCountry(false);
    setOnErrorLocal(false);
    setOnErrorMeta(false);
  }

  const editFormResetErrors = () => {
    setEditErrorCountry(false);
    setEditErrorLocal(false);
    setEditErrorMeta(false);
  }

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const closeNotification = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotification(false);
  };

  //---------------------- Lifecycles------------------------//
  useEffect(() => { 
    loadCountries();
    loadLugares();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppTopbar />

      <FormAdd 
        onSubmitAdd={onSubmitAdd}
        onChangeFormAdd={onChangeFormAdd}
        onChangeFormDataFlag={onChangeFormDataFlag}
        formDataAdd={formDataAdd}
        countryes={countryes}
        onErrorCountry={onErrorCountry}
        onErrorLocal={onErrorLocal}
        onErrorMeta={onErrorMeta}
      />
      
      <CardList 
        formData={formData.countryes}
        onClickEdit={onClickEdit}
        onClickRemove={onClickRemove}
        onDialog={onDialog}
        closeDialog={closeDialog}
        dialogConfirmDelete={dialogConfirmDelete}
      />

      <FormEdit 
        editFormChange={editFormChange} 
        editFormChangeFlag={editFormChangeFlag}  
        onSubmitUpdate={onSubmitUpdate} 
        sEditForm={sEditForm}  
        countries={countryes}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        sEditErrorCountry={sEditErrorCountry}
        sEditErrorLocal={sEditErrorLocal}
        sEditErrorMeta={sEditErrorMeta}
      />

      {
        openNotification && msnNotification.status && 
          <Snackbar open={openNotification} autoHideDuration={3000} onClose={closeNotification}>
            <Alert  onClose={closeNotification} severity={
              msnNotification.type === 'success' ? 'success' : (
              msnNotification.type === 'info' ? 'info' : 
              msnNotification.type === 'warning' ? 'warning' : 'error')
            }>
              { msnNotification.message }
            </Alert>
          </Snackbar>
      }
    </>
  );
}

export default Home;
