import { useEffect, useState } from "react";
import * as Styled from "../Styles";
import { LocalDB } from "../../pages/api/fetchers";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useToast } from "../../contexts/ToastContext";
import EditForm from "./editForm";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

type Countries = {
  name: string;
  flag: string;
  id: number;
  meta: string;
  place: string;
};
type Props = {
  reload: boolean;
  setReload: any;
};

type Selected = {
  id: number;
  place: string;
  meta: string;
  name: string;
  flag: string;
};
type toDelete = {
  id: number;
};
function CardsList({ reload, setReload }: Props) {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [selected, setSelected] = useState<Selected | undefined>();
  const [toDelete, setToDelete] = useState<toDelete | undefined>();
  const toast = useToast();
  const fetchCountries = async () => {
    const response = await LocalDB.LIST();
    const data = await response.json();
    setCountries(data);
  };
  useEffect(() => {
    fetchCountries();
  }, [reload]);

  const handleDelete = async (id: number) => {
    const response = await LocalDB.DELETE(id);
    if (response.status === 200) {
      toast("Local excluído", "success");
      fetchCountries();
    } else toast("Erro ao excluír local", "error");
    setToDelete(undefined);
  };

  return (
    <>
      <Styled.CardsContainer>
        <Dialog
          onClose={() => setToDelete(undefined)}
          open={toDelete ? true : false}
        >
          <DialogTitle>Deseja excluir ?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              O item será excluído permanentemente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              style={{ color: "#e74c3c" }}
              onClick={() => {
                toDelete && handleDelete(toDelete.id);
              }}
            >
              Excluir
            </Button>
            <Button
              onClick={() => setToDelete(undefined)}
              style={{ color: "#a4a4a4" }}
            >
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
        <EditForm
          editData={selected}
          setEditData={setSelected}
          setReload={setReload}
        />

        {countries
          .map((item) => (
            <Styled.Card key={item.id}>
              <div className="card__header">
                <div className="card__flag-container">
                  <Image
                    src={item.flag || ""}
                    width="56px"
                    height="34px"
                    alt="logo"
                  />
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() =>
                      setSelected({
                        place: item.place,
                        meta: item.meta,
                        id: item.id,
                        name: item.name,
                        flag: item.flag,
                      })
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() =>
                      setToDelete({
                        id: item.id,
                      })
                    }
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <div className="card__body">
                <p>Local: {item.place}</p>
                <p>Meta: {item.meta}</p>
              </div>
            </Styled.Card>
          ))
          .reverse()}
      </Styled.CardsContainer>
    </>
  );
}

export default CardsList;
