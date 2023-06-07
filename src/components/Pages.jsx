import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Pagination } from 'react-bootstrap'
import '../styles/tovar-page.css'

const Pages = observer(() => {
    const {tovar} = useContext(Context)
    const pageCount = Math.ceil(tovar.totalCount / tovar.limit)
    const pages=[]

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

  return (
    <div className='pages'>
        <Pagination className='mt-5' >
            {pages.map(page => 
                  <Pagination.Item key={page} active={tovar.page === page} onClick={() => tovar.setPage(page)}>{page}</Pagination.Item>  
            )}
        </Pagination>
    </div>
  )
})

export default Pages