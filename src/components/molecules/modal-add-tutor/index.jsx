import { BaseModal, Input, InputCheckbox } from 'components/atoms'
import React, { useState } from 'react'

const ModalAddTutor = ({
    isOpen,
    onRequestClose
}) => {

    const [step, setStep] = useState(1);

    const _handleClickNext = () => {
        if (step < 3) {
            setStep(step + 1)
        } else {
            onRequestClose()
            setStep(1)
        }
    }

    const tingkat = ["SD", "SMP", "SMA", "S1", "S2", "S3"]

    const pelajaran = ["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris", "Bahasa Indonesia", "Sejarah", "IPA (Hanya SD)", "IPS (Hanya SD)", "Sosiologi", "Lainnya"]

    console.log(tingkat)

    return (
        <BaseModal
            title={'Add Tutor'}
            isOpen={isOpen}
            onRequestClose={() => {
                setStep(1)
                onRequestClose()
            }}
        >
            <div className='w-full flex flex-col gap-2 items-start justify-start'>
                {step === 1 && (
                    <>
                        <Input
                            type='text'
                            label='Nama Lengkap Sesuai KTP'
                        />
                        <Input
                            type='text'
                            label='Domisili Sekarang'
                        />
                        <Input
                            type='text'
                            label='Alamat Sesuai KTP'
                        />
                        <Input
                            type='tel'
                            label='No Handphone aktif'
                        />
                        <Input
                            type='email'
                            label='Alamat Email'
                        />
                        <Input
                            type='text'
                            label='Social Media (Ig , Twitter, Facebook)'
                        />
                    </>
                )}

                {step === 2 && (
                    <>
                        <InputCheckbox
                            label='Mata Pelajaran yang diajarkan'
                            data={pelajaran}
                        />
                        <InputCheckbox
                            label='Tingkat yang diajar'
                            data={tingkat}
                        />
                        <Input
                            type='text'
                            label='Jadwal yang tersedia untuk mengajar (hari dan jam)'
                        />
                        <Input
                            type='number'
                            label='Harga per Sesi (Rp / sesi)'
                        />
                    </>
                )}

                {
                    step === 3 && (
                        <>
                            <Input
                                type='file'
                                label='Upload foto profil (Foto akan digunakan untuk dipasang pada website sistem informasi moguru)'
                            />

                            <div className='w-full flex flex-col gap-2 justify-center items-center'>
                                <p className='text-md text-gray-900 font-semibold'>
                                    preview foto
                                </p>

                                <div className='w-24 h-24 bg-gray-200 rounded-lg ml-4' />
                            </div>
                        </>
                    )
                }

                <div className='w-full flex justify-between mt-8'>
                    <div className='flex gap-2 justify-start items-start'>
                        <div className={`w-16 h-2 ${step === 1 ? 'bg-primary-200' : 'bg-gray-200'} rounded-xl`}>
                        </div>
                        <div className={`w-16 h-2 ${step === 2 ? 'bg-primary-200' : 'bg-gray-200'} rounded-xl`}>
                        </div>
                        <div className={`w-16 h-2 ${step === 3 ? 'bg-primary-200' : 'bg-gray-200'} rounded-xl`}>
                        </div>
                    </div>
                    <button className="p-2 flex items-center justify-center bg-primary-200 text-white rounded-lg hover:shadow-lg"
                        onClick={_handleClickNext}
                    >
                        {step > 2 ? 'Tambah' : 'Selanjutnya'}
                    </button>
                </div>


            </div>
        </BaseModal>
    )
}

export default ModalAddTutor