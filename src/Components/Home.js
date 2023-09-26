import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';

function Home() {
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <table striped ordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employees && Employees.length >0
                        ?
                        Employees.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td><td>
                                        {item.Age}
                                    </td>
                                </tr>
                            )
                            
                            })
                            :
                            "No data available"
                            }
                    </tbody>
                </table>
            </div>
        </Fragment>
        
    )
}
export default Home;