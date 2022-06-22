import { useEffect, useState } from "react";
import axios from 'axios';


const useGetProducts = (API) => {
	const [products, setProducts] = useState ([]);

	useEffect(() => {
		// const fetchData = async () => { también se ude hace asi
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
            //const { id, title, price, images } = products;
        }
        fetchData();
    }, []);  //aca va el elemento o valor al que vamos a escuchar.
    return products;
}
export default useGetProducts;


//% también se podría de esta forma que hace uso de un estado de “loading” al custom hook:
/* export default useGetProducts;

export default function useGetProducts(API) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((response) => {
            setProducts(response);
            setIsLoading(false);
            });
    }, []);

    return { products, isLoading };
} */