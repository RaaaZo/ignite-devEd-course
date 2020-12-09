import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StoreState } from '../ducks/store/store'

const Detail: React.FC<{}> = () => {
  const { details, screenshots, isLoading } = useSelector((state: StoreState) => state.gameDetails)

  return (
    <>
      {!isLoading && details && (
        <>
          <CardShadow>
            <StyledDetail>
              <Stats>
                <div className='rating'>
                  <h3>{details.name}</h3>
                  <p>Rating: {details?.rating}</p>
                </div>

                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {details.platforms.map(({ platform: { id, image_background, name } }) => (
                      <h3 key={id}>{name}</h3>
                    ))}
                  </Platforms>
                </Info>
              </Stats>

              <Media>
                <img src={details.background_image} alt={details?.name} />
              </Media>

              <Description>
                <p>{details.description}</p>
              </Description>

              <div className='gallery'>
                {screenshots.map(({ id, image }) => (
                  <img key={id} src={image} alt={`${id}`} />
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

  img {
    width: 100%;
  }
`

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled(motion.div)`
  text-align: center;
`

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
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
