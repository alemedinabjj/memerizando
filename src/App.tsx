import { useState, useEffect, FormEvent } from 'react'
import { FileArrowUp, PaperPlaneRight } from 'phosphor-react'
import { Photo } from './types/Photo'
import * as S from './App.styles'
import * as Photos from './services/photos'
import { PhotoItem } from './components/PhotoItem'

export const App = () => {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos = async () => {
    setLoading(true)
    setPhotos(await Photos.getAll())
    setLoading(false)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File

    e.currentTarget.reset()

    if (file && file.size > 0) {
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if (result instanceof Error) {
        alert(result.name)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  const handleDelete = async (name: string) => {
    await Photos.deletePhoto(name)
    getPhotos()
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Galeria de Memes</S.Header>

        <S.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            <div>
              <FileArrowUp size={32} />
              <span>Adicionar Meme</span>
            </div>
          </label>
          <input type="file" name="image" id="name" />
          <div>
            <label htmlFor="enviar">
              <div>
                {uploading && 'Enviando sua foto...'}
                <PaperPlaneRight size={32} />
              </div>
            </label>
            <input type="submit" value="Enviar" id="enviar" />
          </div>
        </S.UploadForm>

        {loading && (
          <S.ScreenWarning>
            <div className="emoji">✌</div>
            <div>Carregando...</div>
          </S.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <S.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                handleDelete={handleDelete}
              />
            ))}
          </S.PhotoList>
        )}

        {
          // Se não estiver carregando e não tiver fotos
          !loading && photos.length === 0 && (
            <S.ScreenWarning>
              <div className="emoji">😞</div>
              <div>Não há memes cadastradas</div>
            </S.ScreenWarning>
          )
        }
      </S.Area>
    </S.Container>
  )
}
