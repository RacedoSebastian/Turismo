import ContactForm from "../components/contact/ContactForm"
import ContactHeader from "../components/contact/ContactHero"
import ContactInfoSection from "../components/contact/ContactInfoSection"
import ContactMap from "../components/contact/ContactMap"
import MainLayout from "../layout/MainLayout"

const Contact = () => {
    return (
        <>
            <MainLayout>
                <ContactHeader />
                <ContactInfoSection />
                <ContactForm />
                <ContactMap />
            </MainLayout>
        </>
    )
}

export default Contact