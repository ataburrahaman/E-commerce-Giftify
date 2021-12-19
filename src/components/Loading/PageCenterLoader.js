import './Style.css'
import CircularProgress from "@material-ui/core/CircularProgress";

export const PageCenterLoader = () => {
    return(
        <div className= "center-loader">
            <CircularProgress color='inherit' />
        </div>

    )
}