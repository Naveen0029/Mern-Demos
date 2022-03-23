//React Routes
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
import React from 'react'
import { BrowserRouter as Router,Routes,Route } 
from 'react-router-dom'
import Invoices from './Invoices'
import Expenses from './Expenses'
import Demo24 from './Demo24'
import Invoice from './Invoice'

const Demo25 = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Demo24 />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              /> {/*It would run until person has not clicked any link */}
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
</Routes>
      </Router>
    </div>
  )
}

export default Demo25
