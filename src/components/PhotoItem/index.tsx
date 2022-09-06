import * as S from './styles'
import { Trash } from 'phosphor-react'

type Props = {
  url: string
  name: string
  handleDelete: (name: string) => void
}

export const PhotoItem = ({ url, name, handleDelete }: Props) => {
  return (
    <S.Container>
      <img src={url} alt={name} />
      {name}
      <S.Button>
        <Trash size={32} onClick={() => handleDelete(name)} />
      </S.Button>
    </S.Container>
  )
}
