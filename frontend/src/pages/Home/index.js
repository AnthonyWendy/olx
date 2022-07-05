import React, { useState, useEffect } from 'react';
import { SearchArea,   PageArea} from './styled';
import useApi from '../../helpers/OlxAPI'


import { PageContainer } from '../../components/MainCompents'

const Page = () => {
    const api = useApi();

    return (

        <>
            <SearchArea>
                <PageContainer>
                    ...
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
            
        </>

    );
}
export default Page;