import React from 'react'
import Header from './Header'
import UserCrud from '../user/UserCrud'
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className='content container-fluid'>
            <div className="p-3 mt-3">
                 <UserCrud></UserCrud>
            </div>
        </main>
    </React.Fragment>