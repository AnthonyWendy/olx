import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea,   PageArea} from './styled';
import useApi from '../../helpers/OlxAPI'


import { PageContainer } from '../../components/MainCompents'
import AdItem from '../../components/partiais/AdItem';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();

    }, []);

    useEffect(()=> {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchbox">
                    <form>
                        <input type="text" name="q" placecholder="O que você procura?"/>
                        <select className="state">
                            {stateList.map((i,k) => 
                            <option key={k} value={i.name}>{i.name}</option>
                            )}
                        </select>
                        <button>Pesquisar</button>
                    </form>

                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to="`ads?cat=${i.slug}`" className="categoryItem">
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Ánuncios Recentes</h2>

                    <div className="list">
                        {adList.map((i, k) =>
                            {return <AdItem key={k} data={i} />}
                        )}
                    </div>

                    <Link to="/ads" className="tonho">Ver todos</Link>

                    <hr/>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since
the 1500s,when an unknown printer tookagalley of type and scrambled it to makeatype specimen book.It has survived not only five centuries.
but also the leap into electronic typesetting,remaining essentially unchanged.</p>
                </PageArea>
            </PageContainer>
            
        </>

    );
}
export default Page;