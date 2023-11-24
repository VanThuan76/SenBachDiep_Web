import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { axiosInstance } from "src/https.config"
import { IBaseResponse } from "../schemas/base"
import { IServices } from "../schemas/services"

const QUERY_KEY = "ServiceQuery"
export const useGetListService = (options?: Partial<UseQueryOptions>) => {
    return useQuery({
        queryKey: [QUERY_KEY, 'get-all'],
        queryFn: () => axiosInstance.get<IBaseResponse<IServices>>('/web/v1/services'),
        select(data) {
            return data.data
        },
        enabled: options?.enabled
    })
}