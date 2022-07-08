import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { PageArea, Fake} from './styled';
import useApi from '../../helpers/OlxAPI'


import {PageContainer} from '../../components/MainCompents'

const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdIndo] = useState([]);

    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            .idimage
                        </div>
                        
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake />}
                            </div>
                            <div className="adDescription">
                                .adDescription                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box">
                        .rightBox1
                    </div>
                    <div className="box">
                        .rightBox1

                    </div>
                </div>
            </PageArea>
        </PageContainer>

    );
}
export default Page;