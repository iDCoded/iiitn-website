
interface ContactCardProps {
    name: string
    role: string
    phone: string
    email: string
    imgSrc: string
}

function ContactCard({ name, role, phone, email, imgSrc }: ContactCardProps) {
    return (
        <>


            <div className="flex items-center h-320px w-200px justify-center">

                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src={imgSrc} alt={name} />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>{role}</p>
                            </div>
                            <table className="text-xs my-3">
                                <tbody>

                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">{phone}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{email}</td>
                                    </tr>
                                </tbody></table>



                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactCard