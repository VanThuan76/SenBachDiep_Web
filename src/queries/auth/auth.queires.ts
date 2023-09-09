import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { axiosInstanceNoAuth } from "src/https.config"
import { IAuthResponse, ILogin, IRegister } from "src/schemas/auth.type"
import { IBaseResponse } from "src/schemas/baseResponse.type"
import { IUser } from "src/schemas/user.table.type"
import { login } from "src/shared/stores/appSlice"

const QUERY_KEY = "AuthQuery"
export const useRegister = (onSuccessHandle?: () => void) => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (body: IRegister) => axiosInstanceNoAuth.post<IBaseResponse<IUser>>('/register', body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            toast({
                variant: 'success',
                title: "Đăng ký thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Đăng ký thất bại",
            })
        }
    })
}
export const useLogin = (onSuccessHandle?: () => void) => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    return useMutation({
        mutationFn: (body: ILogin) => axiosInstanceNoAuth.post<IBaseResponse<IAuthResponse>>('/login', body),
        onSuccess: (data) => {
            if (!data.data) return
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
            if (onSuccessHandle) onSuccessHandle()
            dispatch(login(data.data))
            toast({
                variant: 'success',
                title: "Đăng nhập thành công",
            })
        },
        onError: (err: any) => {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err?.data?.data || "Đăng nhập thất bại",
            })
        }
    })
}