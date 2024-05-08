import { Box, Text, useToast } from '@chakra-ui/react'
import { styles } from './styles'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { CloseButton } from '@chakra-ui/react'

export default function ImagesUpload({ formDetails }: any) {
  const {
    formState: { errors },
    setValue,
    watch,
  } = formDetails
  const toast = useToast()
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (watch('stepTwo.images').length + files.length > 5) {
      toast({
        title: 'Maximum of 5 images allowed',
        description: "You can't upload more than 5 images",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })

      return
    }
    const filteredFiles = files.filter(file => file.type.startsWith('image/'))
    setValue('stepTwo.images', [...watch('stepTwo.images'), ...filteredFiles], { shouldValidate: true })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleRemoveImage = (index: number) => {
    setValue(
      'stepTwo.images',
      watch('stepTwo.images').filter((_: any, i: number) => i !== index),
      { shouldValidate: true },
    )
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (watch('stepTwo.images').length + files.length > 5) {
      toast({
        title: 'Maximum of 5 images allowed',
        description: "You can't upload more than 5 images",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      })

      e.target.value = ''
      return
    }
    const filteredFiles = files.filter(file => file.type.startsWith('image/'))
    setValue('stepTwo.images', [...watch('stepTwo.images'), ...filteredFiles], { shouldValidate: true })
    e.target.value = ''
  }

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Box
      sx={{
        ...styles.stepWrapper,
        display: 'flex',
        gap: '23px',
        flexWrap: 'wrap',
      }}
    >
      <Box
        className={`drag-drop-container ${isDragging ? 'drag-over' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        sx={styles['drag-drop-container']}
        onClick={handleUploadButtonClick}
      >
        <Image src='/icons/upload.svg' alt='image' width='41' height='43' />
        <Text fontSize='lg' fontWeight={400}>
          {isDragging ? 'Drop files here' : 'Drag files to upload'}
        </Text>
        <input type='file' accept='image/*' multiple style={{ display: 'none' }} onChange={handleFileInputChange} ref={fileInputRef} />
        {errors.stepTwo?.images && <Text color='red.500'>{errors.stepTwo.images.message}</Text>}
      </Box>
      {!!watch('stepTwo.images').length && (
        <Box sx={styles['images-list']}>
          {watch('stepTwo.images').map((image: File, index: number) => (
            <Box sx={styles['image-item']} key={index}>
              <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Image width={39} height={30} src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
                <Text fontSize='lg' fontWeight={400}>
                  {image.name}
                </Text>
              </Box>
              <CloseButton size='sm' onClick={() => handleRemoveImage(index)} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
