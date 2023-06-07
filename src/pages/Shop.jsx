import React, { useContext, useEffect } from 'react'
import TypeBar from '../components/TypeBar'
import TovarList from '../components/TovarList'
import { Context } from '..'
import { fetchBrands, fetchTovars, fetchTypes } from '../http/tovarAPI'
import { observer } from 'mobx-react-lite'
import Pages from '../components/Pages'


const Shop = observer(() => {
    const {tovar} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => tovar.setTypes(data))
        fetchBrands().then(data => tovar.setBrands(data))
        fetchTovars(null, null, 1, 8).then(data => {
            tovar.setTovar(data.rows)
            tovar.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchTovars(tovar.selectedType.id, tovar.selectedBrand.id, tovar.page, 8).then(data => {
            tovar.setTovar(data.rows)
            tovar.setTotalCount(data.count)
        })
    }, [tovar.page, tovar.selectedType, tovar.selectedBrand])

    return (
        <div>
            <div className='sidebar'>
                <TypeBar />
            </div>
            <div className='sort'>
                <TovarList/>
                <Pages/>
            </div>
            <main>

            </main>
        </div>
    )
})

export default Shop