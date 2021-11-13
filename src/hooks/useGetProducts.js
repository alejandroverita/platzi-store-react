import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
        axios(API)
        .then((response) => {
            setProducts(response.data);
            setIsLoading(false);
        });
	}, [])

    return products  ;
}

export default useGetProducts;