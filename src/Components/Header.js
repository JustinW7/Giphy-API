import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobal } from '../context/global'
import { useTheme } from '../context/themeContext'

const search = <i className="fa-solid fa-magnifying-glass"></i>

function Header({setRendered}) {
    const {searchGiffs} = useGlobal()

    const theme = useTheme()

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        searchGiffs(query)
        setRendered('search')
        setQuery('')

        if(query === ''){
            setRendered('trending')
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <HeaderStyled theme={theme}>
            <div className="logo">
             
             <h3>Search Any Gifs </h3>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text" value={query} onChange={handleChange}  placeholder="Search for all GIFs eg:laugh,cry,dancing,singing,etc"  />
                    <button className="submit-btn">
                        {search}
                    </button>
                </div>
            </form>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    padding: 2rem 22rem;
    background-color: ${(props) => props.theme.colorBg2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 1300px){
        padding: 2rem 10rem;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        span{
            text-transform: uppercase;
            color: ${(props) => props.theme.colorGrey};
            font-size: .8rem;
        }
        svg{
            width: 10rem;
        }
    }

    form{
        width: 100%;
        .input-control{
            position: relative;
            width: 100%;
            input{
                position: relative;
                z-index: 10;
                width: 100%;
                font-family: inherit;
                font-size: inherit;
                padding: 1rem 2rem;
                outline: none;
                border: none;
                border-radius: 15px;
            }
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                left: -.3rem;
                transform: translateY(-50%);
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
                background-size: 400% 400%;
                z-index: 1;
                padding: .3rem;
                transform: scale(0);
                border-radius: 1rem;
                transition: all .3s ease;
                animation: gradient 7s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }
            }
            &:hover::after, &:focus-within::after{
                transform: scale(1) translateY(-50%);
            }

            .submit-btn{
                position: absolute;
                top: 50%;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-50%);
                border: none;
                outline: none;
                color: ${(props) => props.theme.colorWhite};
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                z-index: 10;
                height: 100%;
                padding: 0 1rem;
                border-radius: 15px;
                background: linear-gradient(to right,
                    ${props => props.theme.colorPurple},
                    ${props => props.theme.colorSalmon}
                );
                background-size: 400% 400%;
                animation: gradient 3s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }

                i{
                    font-size: 1.8rem;
                    color: white;
                }
            }
        }
    }
`;

export default Header