import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #CCC;

    a{
        text-decoration: none;
    }

    .container{
        max-width: 1000px;
        margin: 0vw 0vw 0vw 30vw;
        display: flex;

        .logo{
            flex: 1;
            display: flex;
            align-items: left;
            height: 20px;
            margin-top: 10px;
        }
    }

    nav{
        padding-top: 10px;
        padding-booton: 10px;

        ul, li{
            margin:0;
            padding: 0;
            list-style:none;
        }

        ul {
            display:flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin-left: 20px;
            margin-right: 20px;

            a{
                color: #008;
                font-size: 14px;
                text-decoration: none;            

                &:hover{
                    color:#999;
                }

                &.button{
                    background-color: #FF8100 ;
                    border-radius: 4px;
                    color: #FFF;
                    padding: 5px 10px;
                }

                &.button:hover{
                    background-color: #E77506;
                }
            }
        }
    }


`;