import { IMenuPath } from "../types/common";

export const menuPath: IMenuPath[] = [
    {
        path: "home"
    },
    {
        path: "introduction"
    },
    {
        path: "services",
        children: ["price_list", "promotion"]
    },
    {
        path: "news"
    },
    {
        path: "contact"
    }
]
export const footerContactData = {
    address: "Số 36 Trần Phú, Quận Ba Đình, TP. Hà Nội",
    phone: "+84 946786564",
    email: "vjgr@gmail.com"
}
export const footerAboutUsData = ["Lịch sử hình thành", "Tầm nhìn & Sứ mệnh", "Điều kiện & điều khoản"]
