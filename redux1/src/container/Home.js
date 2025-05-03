import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews
} from '../services/getNewsData';

import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay.js'

const Home = () => {

    const dispatch = useDispatch();

    //call action
    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
    },[])

    //get State
    const latestNewslist = useSelector(
        newsSelectors.getLatestNews
    )

    const articleNewslist = useSelector(
        newsSelectors.getArticleNews
    )

    return(
        <>
            <LatestDisplay ldata={latestNewslist?.data}/>
            <ArticleDisplay adata={articleNewslist?.data}/>
        </>
    )

}
export default Home