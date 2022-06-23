import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #CCC;

    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;

        .logo{
            flex: 1;
            display: flex;
            align-items: left;
            height: 50px;
        }
    }
`;