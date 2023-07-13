import React from 'react'

const Table = ({users}) => {

    console.log(users);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {/* <th>gender</th> */}
                        <th>role</th>
                        <th>Phone </th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user._id}>
                                <td data-label="ID:">{user._id}</td>
                                <td data-label="First Name:">{user.firstname}</td>
                                <td data-label="Last Name:">{user.lastname}</td>
                                {/* <td data-label="gender:">{user.gender}</td> */}
                                <td data-label="role:">{user.role}</td>
                                <td data-label="Phone #:">{user.phoneno}</td>
                                <td data-label="Email:">{user.email}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Table