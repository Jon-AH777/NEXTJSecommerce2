import Image from "next/image";

export default function Transactions(){
    return (
        <div className="bg-backSoft p-5 rounded-[10px]">
            <h2 className="mb-5 font-extralight text-white">Latest Transactions</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image src="/noavatar.png" alt="" width={40} height={40} className="object-fit rounded-[50%]" /> Jona Subba
                            </div>
                        </td>
                        <td>
                            <span className={`${"text-sm text-[white] p-[5px] rounded-[5px]"} ${"bg-[#f7cb7375]"}`}>Pending</span>
                        </td>
                        <td>26.6.2024</td>
                        <td>$5,500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}