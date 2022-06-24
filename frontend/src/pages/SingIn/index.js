import React from 'react';
import { PageArea} from './styled';

import {PageContainer, PageTitle} from '../../components/MainCompents'

const Page = () => {
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>

            <PageArea>
                <form>
                    <label className="area">
                        <div className="area-title">E-mail:</div>
                        <div className="area-input">
                            <input type="email"></input>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>

    );
}

export default Page;