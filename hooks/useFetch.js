import { useEffect, useState } from "react"

export default useFetch = (url) => {

    const [state, setState] = useState({
        loading: true,
        err: null,
        data: null
    });

    useEffect(() => {
        try{
            fetch(url)
                .then(resp => resp.json())
                .then(dataJson => {
                    setState({
                        loading: false,
                        err: null,
                        data: dataJson
                    })
                })
        } catch {
            setState({
                loading: false,
                err: 'No se pudo cargar la aplicación.',
                data: null
            })
        }
    }, [url])

    return state
}