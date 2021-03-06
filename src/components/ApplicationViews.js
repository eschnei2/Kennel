import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalSearch />
                    <AnimalList />
                </Route>

            <CustomerProvider>
                <LocationProvider>
                    <Route exact path="/animals/create">
                        <AnimalForm />
                    </Route>
                </LocationProvider>
            </CustomerProvider>

                <Route exact path="/animals/detail/:animalId(\d+)">
		            <AnimalDetail />
	            </Route>

                <CustomerProvider>
                  <LocationProvider>
                     <Route path="/animals/edit/:animalId(\d+)">
                        <AnimalForm />
                    </Route>
                  </LocationProvider>    
                </CustomerProvider>    
            </AnimalProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <LocationProvider>
                    <CustomerProvider>
                        <Route path="/employees/create">
                            <EmployeeForm />
                        </Route>
                        <Route path="/employees/detail/:employeeId(\d+)">
                            <EmployeeDetail />
                        </Route>
                        <Route path="/employees/edit/:employeeId(\d+)">
                            <EmployeeForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
                
            </EmployeeProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}