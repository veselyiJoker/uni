import React from 'react'
import {
    Routes, 
    Route,
    useLocation,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './containers/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import CompanyStructure from './containers/About/CompanyStructure/CompanyStructure'
import PartnerCompanies from './containers/About/PartnerCompanies/PartnerCompanies'
import Licenses from './containers/About/licenses/Licenses'
import StorageSystem from './containers/About/StorageSystem/StorageSystem'
import Documents from './containers/About/Documents/Documents'
import SecuritiesMarket from './containers/About/SecuritiesMarket/SecuritiesMarket'
import History from './containers/About/History/History'
import Events from './containers/About/Events/Events'
import Contacts from './containers/Contacts/Contacts'
import Vacancies from './containers/About/Vacancies/Vacancies'
import Distribution from './containers/Distribution/Distribution'
import EpicFavre from './containers/Distribution/EpicFavre/EpicFavre'
import Les3Chenes from './containers/Distribution/Les3Chenes/Les3Chenes'
import StrategicPartners from './containers/Distribution/StrategicPartners/StrategicPartners'
import ATCClassification from './containers/Nomenclature/ATCClassification/ATCClassification'
import DomesticManufacturersProducts from './containers/Nomenclature/DomesticManufacturersProducts/DomesticManufacturersProducts'
import Nomenclature from './containers/Nomenclature/Nomenclature'
import RetailChain from './containers/RetailChain/RetailChain'
import ForByers from './containers/ForBuyers/ForByers'
import ForSupplires from './containers/ForSuppliers/ForSuppliers'
import NotFound from './containers/NotFound/NotFound'
import { Layout } from './routes/Layout/Layout'
import { AboutLayout } from './routes/AboutLayout/AboutLayout'
import { DistributionLayout } from './routes/DistributionLayout/DistributionLayout'
import { NomenclatureLayout } from './routes/NomenclatureLayout/NomenclatureLayout'
import {
    I18nProvider,
} from './i18n'
import { AnimatePresence } from 'framer-motion/dist/framer-motion'


const App = () => {

    const location = useLocation()
    const SelectedLocalization = useSelector(state => state.main.localization)

    return (
        <I18nProvider locale={ SelectedLocalization }>
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Routes location={ location } key={ location.pathname }>
                    <Route path='/' element={ <Layout /> }>
                        <Route index element={ <Home /> } />
                        <Route path='about' element={ <AboutLayout /> }>
                            <Route index element={ <About /> } />
                            <Route path='structure' element={ <CompanyStructure /> } />
                            <Route path='partner-companies' element={ <PartnerCompanies />} />
                            <Route path='licenses' element={ <Licenses /> } />
                            <Route path='storage-system' element={ <StorageSystem />} />
                            <Route path='securities-market' element={ <SecuritiesMarket /> } />
                            <Route path='history' element={ <History /> } />
                            <Route path='events' element={ <Events /> } />
                            <Route path='vacancies' element={ <Vacancies /> } />
                            <Route path='contacts' element={ <Contacts /> } />
                            <Route path='documents' element={ <Documents /> } />
                        </Route>
                        <Route path='distribution' element={ <DistributionLayout /> }>
                            <Route index element={ <Distribution /> } />
                            <Route path='epic-favre' element={ <EpicFavre /> } />
                            <Route path='les-3-chenes' element={ <Les3Chenes /> } />
                            <Route path='strategic-partners' element={ <StrategicPartners /> } />
                        </Route>
                        <Route path='nomenclature' element={ <NomenclatureLayout /> }>
                            <Route index element={ <Nomenclature /> } />
                            <Route path='atc-classification' element={ <ATCClassification /> } />
                            <Route path='domestic-manufacturers-products' element={ <DomesticManufacturersProducts /> } />
                        </Route>
                        <Route path='retail-chain' element={ <RetailChain /> } />
                        <Route path='for-byers' element={ <ForByers /> } />
                        <Route path='for-suppliers' element={ <ForSupplires /> } />
                        <Route path='*' element={ <NotFound /> } />
                    </Route>
                </Routes>
            </AnimatePresence>
        </I18nProvider>
    )
}

export default App
