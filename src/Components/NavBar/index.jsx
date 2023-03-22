import { Navbar, NavItem, NavItemProps, Dropdown, Icon, Divider } from "react-materialize"
import Avatar from "../Avatar"
import styled from "styled-components"
import BlankProfile from '../../Assets/Image/blank-profile.png'
import imgLogo from "../../Assets/Image/logo_trial.png"
import './styles.css'

export default function NvbBar({ color, children }) {
    return (
        <Navbar
            alignLinks="right"
            brand={ <Img src={imgLogo} className="circle logo"></Img>}
            id="mobile-nav"
            className="navBar"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
           
            <NavItem className="brand-name">
                G.Next Schooling
            </NavItem>
            <Divider />
            
            <Dropdown
                id="Dropdown_14"
                options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
                }}
                trigger={<a href="#!">  
                            <AvatarContainer>
                                <AvatarBox>
                                    <Img src={BlankProfile} alt="Profile" ></Img>
                                </AvatarBox>
                                <Divider />
                                {' '} <MenuText>Perfil</MenuText>
                                <Icon right>arrow_drop_down</Icon>
                            </AvatarContainer>
                        </a>}
            >  
                <a href="#">
                Editar
                </a>
                <a href="#">
                Cadastrar Dependentes
                </a>
                <Divider />
                <a href="#">
                Cadastrar Professores
                </a>
            </Dropdown>
        </Navbar>
    )
}

const AvatarContainer = styled.div`
    width: 100%;
    height: 64px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`
const AvatarBox = styled.div`
    border-radius: 20rem;
    border: 1px solid #fff;
    display: flex;
    overflow: hidden;
    object-fit: cover;
`
const Img = styled.img`
        width: 40px;
        height: 40px;
`

const MenuText = styled.span`
    padding: 0px 5px 0px 5px;
`