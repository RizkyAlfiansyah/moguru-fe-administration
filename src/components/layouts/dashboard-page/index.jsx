import React from 'react'
import DataTable from 'react-data-table-component'

const Dashboard = () => {

    const columns = [
        {
            name: 'Nama Lengkap',
            selector: row => row.nama,
            sortable: true,
        },
        {
            name: 'Domisili',
            selector: row => row.domisili,
            sortable: true,
        },
        {
            name: 'Alamat Email Aktif',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'No. HP Aktif',
            selector: row => row.phone,
            sortable: true,
        },
        {
            cell: row => <button className='flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 px-4 py-1 text-white text-xs rounded-md'
            >
                detail
            </button>,
            button: true,
        }
    ]

    const datas = [
        {
            nama: 'John Doe',
            domisili: 'Jakarta',
            email: 'JohnDoe@gmail.com',
            phone: '081234567890'
        },
        {
            nama: 'Jane Doe',
            domisili: 'Jakarta',
            email: 'JaneDOe@gmail.com',
            phone: '081234567890'
        },
        {
            nama: 'Irham',
            domisili: 'Jakarta',
            email: 'Irham@gamail.com',
            phone: '081234567890'
        }
    ]

    return (
        <div className="w-full bg-white px-4 rounded-md">
            <div>
                <DataTable
                    title="Data Tutor Moguru"
                    columns={columns}
                    data={datas}
                    selectableRows
                    pagination
                />
            </div>
        </div>
    )
}

export default Dashboard