import React from "react";
import { Oval } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

type loaderProps = {
    width:string
};

const Loader: React.FunctionComponent<loaderProps> = ({width}) => {
    return (
        <div style={{width:width}} className="LoaderCard card bg-disabled mb-5 text-center">
            <div className="body d-flex justify-content-center" >
                <Oval
                    height="50"
                    width="50"
                    color='blue'
                    ariaLabel='loading'
                />
            </div>
        </div>
    )
}

const RouteLoader: React.FunctionComponent<loaderProps> = ({width}) => {
    return (
        <div style={{width:width}} className="routeLoaderCard bg-disabled mb-5 text-center">
            <div className="body d-flex routeLoader" >
                <Oval
                    height="50"
                    width="50"
                    color='blue'
                    ariaLabel='loading'
                />
            </div>
        </div>
    )
}


export default Loader;