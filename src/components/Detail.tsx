import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StoreState } from '../ducks/store/store'
import { useHistory } from 'react-router-dom'
import { resizeImage } from '../utils/resizeImages'

import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const Detail: React.FC<{ pathId: string }> = ({ pathId }) => {
  const { details, screenshots, isLoading } = useSelector((state: StoreState) => state.gameDetails)

  const { goBack } = useHistory()

  const exitDetailHandler = (e: any) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      goBack()
    }
  }

  // Stars Logic
  const getStars = (): JSX.Element[] => {
    const stars = []
    const rating = Math.floor(details!.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star' key={i} src={starFull} />)
      } else {
        stars.push(<img alt='star' key={i} src={starEmpty} />)
      }
    }

    return stars
  }

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && details && (
        <>
          <CardShadow className='shadow' onClick={exitDetailHandler}>
            <StyledDetail layoutId={pathId}>
              <Stats>
                <h3>{details.name}</h3>
                <div className='stars'>
                  <p>Rating: {details?.rating}</p>
                  {getStars()}
                </div>
              </Stats>

              <Media>
                <motion.img
                  layoutId={`image ${pathId}`}
                  loading='lazy'
                  src={resizeImage(details.background_image, 1280)}
                  alt={details?.name}
                />
              </Media>

              <Description>
                <p>{details.description}</p>
              </Description>

              <div className='gallery'>
                {screenshots.map(({ id, image }) => (
                  <img loading='lazy' key={id} src={resizeImage(image, 1280)} alt={`${id}`} />
                ))}
              </div>
            </StyledDetail>
          </CardShadow>
        </>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  z-index: 10;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 1.3rem;
    height: 1.3rem;
    display: inline;
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0;
`

export default Detail
