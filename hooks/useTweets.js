import axios from "axios";
import { useEffect, useState } from "react";

function useTweets(url) {

    let [tweets, setTweets] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [isEndLoading, setIsEndLoading] = useState(false);
    let [isRefreshing, setIsRefreshing] = useState(false);
    let [page, setPage] = useState(1);

    let getTweets = async (isLoading = true) => {
        setIsLoading(isLoading);
        const res = await axios.get(url+'?page=' + page);
        if (page === 1) {
            setTweets(res.data.data)
        } else {
            setTweets(prev => [...prev, ...res.data.data])
        }
        setIsLoading(false);
        setIsEndLoading(false);
    }

    let refreshHandler = async () => {
        setPage(1);
        setIsRefreshing(true);
        await getTweets(false);
        setIsRefreshing(false);
    }

    let handleEndReaching = () => {
        setIsEndLoading(true);
        setPage(prev => prev + 1);
    }
    let getRefreshTweets = () => {
        setPage(1);
        getTweets(false)
    }
    useEffect(() => {
        getTweets(false)
    }, [page]);

    return {isLoading,tweets,isRefreshing,refreshHandler,handleEndReaching,isEndLoading ,getRefreshTweets}

}

export default useTweets;