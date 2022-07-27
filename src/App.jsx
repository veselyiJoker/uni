import React from 'react'
import {
    Routes, 
    Route,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './containers/Home/Home'
import AboutUs from './containers/About/AboutUs/AboutUs'
import CompanyStructure from './containers/About/CompanyStructure/CompanyStructure'
import Licenses from './containers/About/licenses/Licenses'
import StorageSystem from './containers/About/StorageSystem/StorageSystem'
import History from './containers/About/History/History'
import Documents from './containers/About/Documents/Documents'
import Vacancies from './containers/Vacancies/Vacancies'
import Events from './containers/About/Events/Events'
import Distribution from './containers/Distribution/Distribution/Distribution'
import EpicFavreCosmetics from './containers/Distribution/EpicFavre/Cosmetics/Cosmetics'
import EpicFavreDietarySupplements from './containers/Distribution/EpicFavre/DietarySupplements/DietarySupplements'
import EpicFavreSportsNutrion from './containers/Distribution/EpicFavre/SportsNutrition/SportsNutrion'
import Les3ChenesDietarySupplements from './containers/Distribution/Les3Chenes/DietarySupplements/DietarySupplements'
import Les3ChenesCosmetics from './containers/Distribution/Les3Chenes/Cosmetics/Cosmetics'
import StrategicPartners from './containers/Distribution/StrategicPartners/StrategicPartners'
import ATCClassification from './containers/Nomenclature/ATCClassification/ATCClassification'
import DomesticManufacturersProducts from './containers/Nomenclature/DomesticManufacturersProducts/DomesticManufacturersProducts'
import Nomenclature from './containers/Nomenclature/Nomenclature/Nomenclature'
import ForByers from './containers/ForBuyers/ForByers'
import ForSupplires from './containers/ForSuppliers/ForSuppliers'
import NotFound from './containers/NotFound/NotFound'
import { Layout } from './routes/Layout/Layout'
import { AboutLayout } from './routes/AboutLayout/AboutLayout'
import { DistributionLayout } from './routes/DistributionLayout/DistributionLayout'
import { NomenclatureLayout } from './routes/NomenclatureLayout/NomenclatureLayout'
import { EpivFavreLayout } from './routes/DistributionLayout/EpicFavreLayout/EpicFavreLayout'
import { Les3ChenesLayout } from './routes/DistributionLayout/les3ChenesLayout/Les3ChenesLayout'
import {
    I18nProvider,
} from './i18n'

const App = () => {

    const SelectedLocalization = useSelector(state => state.main.localization)

    return (
        <I18nProvider locale={ SelectedLocalization }>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path='about' element={ <AboutLayout /> }>
                        <Route index element={ <AboutUs /> } />
                        <Route path='structure' element={ <CompanyStructure /> } />
                        <Route path='licenses' element={ <Licenses /> } />
                        <Route path='storage-system' element={ <StorageSystem />} />
                        <Route path='history' element={ <History /> } />
                        <Route path='documents' element={ <Documents /> } />
                        <Route path='events' element={ <Events /> } />
                    </Route>
                    <Route path='distribution' element={ <DistributionLayout /> }>
                        <Route index element={ <Distribution /> } />
                        <Route path='epic-favre' element={ <EpivFavreLayout /> }>
                            <Route index element={ <EpicFavreCosmetics /> } />
                            <Route path='dietary-supplements' element={ <EpicFavreDietarySupplements /> } />
                            <Route path='sports-nutrion' element={ <EpicFavreSportsNutrion /> } />
                        </Route>
                        <Route path='les-3-chenes' element={ <Les3ChenesLayout /> }>
                            <Route index element={ <Les3ChenesCosmetics /> } />
                            <Route path='dietary-supplements' element={ <Les3ChenesDietarySupplements /> } />
                        </Route>
                        <Route path='strategic-partners' element={ <StrategicPartners /> } />
                    </Route>
                    <Route path='nomenclature' element={ <NomenclatureLayout /> }>
                        <Route index element={ <Nomenclature /> } />
                        <Route path='atc-classification' element={ <ATCClassification /> } />
                        <Route path='domestic-manufacturers-products' element={ <DomesticManufacturersProducts /> } />
                    </Route>
                    <Route path='for-byers' element={ <ForByers /> } />
                    <Route path='for-suppliers' element={ <ForSupplires /> } />
                    <Route path='vacancies' element={ <Vacancies /> } />
                    <Route path='*' element={ <NotFound /> } />
                </Route>
            </Routes>
        </I18nProvider>
    )
}

export default App
