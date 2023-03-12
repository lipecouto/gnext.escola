import styled from "styled-components";
import { Button, TextInput, Icon } from 'react-materialize';
import { useState } from "react";
import BlankProfile from '../../Assets/Image/blank-profile.png'


export default function Avatar({ content }) {
  const [photoImg, setPhotoImg] = useState({file: ''});

  const handleGetImagem = (photo) =>{
    setPhotoImg({file: URL.createObjectURL(photo.target.files[0])})
  }
  return<>  
            <AvatarContainer>
                <AvatarBox>
                  <ImgBox
                    src={photoImg.file ? photoImg.file : BlankProfile}
                    >
                  </ImgBox>               
                </AvatarBox>
                <FloatButtom 
                    className="red"
                    icon={<InnerIcon>add</InnerIcon>}
                    floating
                    node="button"
                    waves="light"
                    large>
                  <PhotoInput
                    type="file"
                    id="photo_send"
                    accept="image/*" 
                    onChange={(event) => handleGetImagem(event)}
                  />
                    
                </FloatButtom>
            </AvatarContainer>
           
        </>;
}

const PhotoInput = styled.input`
    background-color: transparent !important;
    opacity: 0;
    position: absolute;
`

const InnerIcon = styled(Icon)`
    align-self: center;
    font-size: 2.5rem !important;
`
const ImgBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`

const FloatButtom = styled(Button)`
    position: absolute;
    display: flex;
    padding-right: 10rem;
    margin-right: 7rem;
    border: 5px solid #fff !important;

    @media only screen and (min-width: 360px) {
        margin-right: 6rem;
      }
    
    @media only screen and (min-width: 500px) {
        margin-right: 16rem;
      }

    @media only screen and (min-width: 760px) {
        margin-right: 4rem;
      }
`

const AvatarBox = styled.div`
    background-color: #44cd6f;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    @media only screen and (min-width: 360px) {
        width: 300px;
        height: 300px;
        align-self: center;
      }
    
    @media only screen and (min-width: 411px) {
        width: 300px;
        height: 300px;
        align-self: center;
    }
    
    @media only screen and (min-width: 530px) {
        width: 300px;
        height: 300px;
      }

    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @media only screen and (min-width: 1024px) {
        width: 300px;
        height: 300px;
      }
    
    @media only screen and (min-width: 1280px) {
        width: 300px;
        height: 300px;
      }

`

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 10px;

    
    @media only screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
        margin: 10px;
    }
    
`;

