import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #DDD;
    margin-bottom: 2px solid #CCC;
    padding: 20px 0;

    .searchbox {
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display:flex;

        form {
            flex:1;
            display: flex;

            input, select {
                height: 40px;
                border: 0;
                border-radius: 5px;
                outline: 0;
                font-size: 15px;
                color: #000;
                margin-right: 20px;
            }

            input {
                flex: 1;
                padding: 0 10px;
            }

            select {
                width: 100px;
            }

            button {
                background-color: #49AEEF;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                color: #FFF;
                height: 40px;
                padding: 0 20px;
                cursor: pointer;
            }
        }
    }

    .categoryList {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem {
            width: 25%;
            display: flex;
            align-items: center;
            color: #000;
            text-decoration: none;
            height: 50px;
            justify-content: center;

            &:hover {
                color:#999;
            }

            img {
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }

            span {
                min-width: 10ch;
            }
        }
    }
`;

export const PageArea = styled.div`

h2 {
    font-size: 20px;
}

.list {
    display: flex; 
     flex-wrap: wrap;/*quera a linha */

     .aditem {
        width: 25%;
     }
}

.tonho{
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
}

`;