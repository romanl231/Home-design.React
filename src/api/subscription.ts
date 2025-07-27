import { api } from "./api"

export const SubscribtionService = {
    subscribe: (data: {email: string}) => { 
        api.post("knock-knock", {
        email: data.email,
        });
    }
};