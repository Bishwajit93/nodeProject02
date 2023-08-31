import React from 'react'

const RestaurantList = () => {
  return (
    <div className="list-group">
        <table className="table table-hover table-dark caption-top">
            <thead>
                <tr className="bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr>
                    <td>hola</td>
                    <td>hulu</td>
                    <td>huli</td>
                    <td>hulilu</td>
                    <td><button className='btn btn-warning'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                </tr>
            </tbody>
        </table>         
    </div>
  )
}

export default RestaurantList
