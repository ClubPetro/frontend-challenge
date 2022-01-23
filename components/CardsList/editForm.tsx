import * as Styled from "../Styles";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
import { useState } from "react";
import { LocalDB } from "../../pages/api/fetchers";
import { useToast } from "../../contexts/ToastContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, DialogActions, DialogContent, ListItem } from "@mui/material";

type editData = {
  place: string;
  id: number;
  meta: string;
  name: string;
  flag: string;
};

type Props = {
  setReload: any;
  editData: editData | undefined;
  setEditData: any;
};

function EditForm({ editData, setEditData, setReload }: Props) {
  const toast = useToast();
  const [place, setPlace] = useState<string>();
  const [meta, setMeta] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editData) {
      const body = {
        meta: meta || editData.meta,
        place: place || editData.place,
        name: editData.name,
        flag: editData.flag,
      };
      const response = await LocalDB.EDIT(body, editData.id);
      if (response.status === 200) {
        toast("Edição concluída", "success");
        setReload((prev: boolean) => !prev);
        setEditData(undefined);
      } else toast("Erro ao editar", "error");
    }
  };
  return (
    <>
      <Dialog
        onClose={() => setEditData(undefined)}
        open={editData ? true : false}
      >
        <DialogTitle>Editar Dados</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Styled.EditForm>
              <FormControl className="editForm--inputs">
                <TextField
                  id="outlined-size-small"
                  placeholder="Digite o local que deseja conhecer"
                  size="small"
                  label="Local"
                  defaultValue={editData?.place}
                  onBlur={(event) => setPlace(event.target.value)}
                  required
                />
              </FormControl>
              <FormControl className="editForm--inputs">
                <InputMask
                  mask="99/9999"
                  maskChar={null}
                  required
                  id="outlined-size-small"
                  placeholder="mês/ano"
                  defaultValue={editData?.meta}
                  onChange={(event) => setMeta(event.target.value)}
                >
                  {(inputProps: any) => (
                    <TextField size="small" label="Meta" {...inputProps} />
                  )}
                </InputMask>
              </FormControl>
            </Styled.EditForm>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ color: "#a4a4a4" }}
              onClick={() => setEditData(undefined)}
            >
              Cancelar
            </Button>
            <Button autoFocus style={{ color: "#4f9419" }} type="submit">
              Salvar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default EditForm;
