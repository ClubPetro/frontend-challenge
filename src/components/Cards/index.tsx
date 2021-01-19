import React, { useCallback, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import * as yup from 'yup'

import { TravelsProps, useTravel } from '../../hooks/travels'

import Card from '../Card'
import Input from '../Input'

import * as S from './styles'

type FormErrorProps = {
  [key: string]: boolean
}

type CardsProps = {
  travels: TravelsProps
}

const Cards = ({ travels }: CardsProps) => {
  const [local, setLocal] = useState('')
  const [target, setTarget] = useState('')
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrorProps>(
    {} as FormErrorProps
  )
  const { updateTravel } = useTravel()

  const [travelId, setTravelId] = useState(-1)
  const { removeTravel } = useTravel()

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleClick = useCallback((id: number, type: string) => {
    setFormErrors({})
    setTarget('')
    setLocal('')
    setTravelId(id)
    setOpen(true)

    type === 'edit' ? setEdit(true) : setEdit(false)
  }, [])

  const handleConfirmModal = useCallback(
    async (id: number, type: string) => {
      switch (type) {
        case 'edit':
          try {
            const schema = yup.object().shape({
              local: yup.string().required(),
              target: yup
                .string()
                .required()
                .matches(
                  /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/
                ),
            })

            await schema.validate(
              {
                local,
                target,
              },
              { abortEarly: false }
            )

            await updateTravel({ id: travelId, local, target })
            setOpen(false)
          } catch (err) {
            const error = err.errors.map((error: string) => {
              const field = error.split(' ')[0]

              return field
            })

            const obj = Object.fromEntries(
              error.map((error: string) => [error, true])
            )

            setFormErrors(obj)
          }
          break

        case 'remove':
          removeTravel(travelId)
          setOpen(false)
          break
      }
    },
    [local, removeTravel, travelId, updateTravel, target]
  )

  return (
    <S.Wrapper>
      {travels.length > 0 ? (
        travels.map((travel) => (
          <Card
            key={travel.id}
            flag={travel.country_flag_url}
            countryName={travel.country_name}
            local={travel.local}
            target={travel.target}
            onEdit={() => handleClick(travel.id, 'edit')}
            onRemove={() => handleClick(travel.id, 'remove')}
          />
        ))
      ) : (
        <S.NoResults>Não há resultados disponíveis :(</S.NoResults>
      )}

      {!!open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <S.StyledDialogTitle>
            {'Atualize os dados do lugar'}
          </S.StyledDialogTitle>
          <S.StyledDialogContent>
            {edit ? (
              <>
                <S.StyledDialogContentText>
                  Digite os dados abaixo para atualizar o lugar que você quer
                  conhecer
                </S.StyledDialogContentText>
                <Input
                  mask=""
                  outline
                  inputSize="medium"
                  onChange={(e) => setLocal(e.target.value)}
                  value={local}
                  error={formErrors.local}
                  fullWidth
                  placeholder="Local"
                />
                <Input
                  mask="99/9999"
                  outline
                  inputSize="medium"
                  error={formErrors.target}
                  onChange={(e) => setTarget(e.target.value)}
                  value={target}
                  fullWidth
                  placeholder="mês/ano"
                />
              </>
            ) : (
              <S.StyledDialogContentText id="alert-dialog-description">
                Ao excluir esse lugar não será possível mais recuperá-lo. Deseja
                seguir com essa ação?
              </S.StyledDialogContentText>
            )}
          </S.StyledDialogContent>
          <DialogActions>
            <S.StyledButton aria-label="Close modal" onClick={handleClose}>
              Cancelar
            </S.StyledButton>
            <S.StyledButton
              aria-label="Confirm modal"
              onClick={() =>
                handleConfirmModal(travelId, edit === true ? 'edit' : 'remove')
              }
            >
              Confirmar
            </S.StyledButton>
          </DialogActions>
        </Dialog>
      )}
    </S.Wrapper>
  )
}

export default Cards
