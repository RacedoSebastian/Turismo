import OffersGrid from "../components/offer/OffersGrid"
import OffersHeader from "../components/offer/OffersHeaders"
import MainLayout from "../layout/MainLayout"

const Offer = () => {
    return(
        <>
            <MainLayout>
                <OffersHeader/>
                <OffersGrid/>
            </MainLayout>
        </>
    )
}

export default Offer