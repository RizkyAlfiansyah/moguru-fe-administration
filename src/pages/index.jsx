import { Dashboard, Headers, MainHeader, MainLayout, Sidebar } from "components/layouts";
import { ModalAddTutor } from "components/molecules";
import { useState } from "react";
import DataTable from "react-data-table-component";

export default function Home() {
  const [openModalAdd, setOpenModalAdd] = useState(false)

  const columns = [
    {
      name: 'Nama Lengkap',
      selector: row => <div>
        <p className='text-sm font-bold text-primary-200'>{row.nama}</p>
      </div>,
      sortable: true,
    },
    {
      name: 'Domisili',
      selector: row => <div>
        <p className='text-sm font-bold text-primary-200'>{row.domisili}</p>
      </div>,
      sortable: true,
    },
    {
      name: 'Alamat Email Aktif',
      selector: row => <div>
        <p className='text-sm font-bold text-primary-200'>{row.email}</p>
      </div>,
      sortable: true,
    },
    {
      name: 'No. HP Aktif',
      selector: row => <div>
        <p className='text-sm font-bold text-primary-200'>{row.phone}</p>
      </div>,
      sortable: true,
    },
    {
      cell: row =>
        <button className='flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 px-4 py-1 text-white text-xs rounded-md'>
          detail
        </button>,
      button: true,
    }
  ]

  const data = [
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
    },
  ]

  return (
    <>

      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex items-center justify-end">
          <button className="p-2 flex items-center justify-center bg-primary-200 text-white rounded-lg hover:shadow-lg"
            onClick={() => setOpenModalAdd(true)}
          >
            Tambah Tutor
          </button>
        </div>
        <Dashboard />
      </div>
      <ModalAddTutor
        isOpen={openModalAdd}
        onRequestClose={() => setOpenModalAdd(false)}
      />
    </>
  )
}

