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
                width: 25px;
                height: 25px;
                margin-right: 10px;
            }

            span {
                min-width: 10ch;
            }
        }
    }
`;

export const PageArea = styled.div`
form {
    background-color:#FFF;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 8px 8px 3px #999;

    .area {
        display: flex;
        align-items: center;
        padding: 18px;
        max-width: 500px;

        .area-title{
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area-input {
            flex:1;

            input {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #DDD;
                border-radius: 3px;
                outline: 0;
                transition: all ease .4s;

                &:focus {
                    border: 1px solid #333;
                    color: #333;
                }
            }

            button{
                background-color: #0089FF;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: #FFF;
                font-size: 15px;
                cursor: pointer;

                &: hover {
                    background-color: #006FCE;
                }
            }
        }
    }
}
`;