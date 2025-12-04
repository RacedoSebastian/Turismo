import TripsGrid from "../components/tripsPage/TripsGrid"
import TripsHeader from "../components/tripsPage/TripsHeader"
import MainLayout from "../layout/MainLayout"

const TripsPage = () => {
    return(
        <>
            <MainLayout>
                <TripsHeader/>
                <TripsGrid/>
            </MainLayout>
        </>
    )
}

export default TripsPage