import { api } from "./api";

export const ContactSubmitionService = {
    submit: (data: {
                email: string; 
                city: string; 
                template: string; 
                message: string;
            }) => {
        api.post("kaboom", { data });
    },
}