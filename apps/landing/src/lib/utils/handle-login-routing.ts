import { COMPANY_DASHBOARD_URL, PERSONAL_DASHBOARD_URL, PRACTITIONERS_DASHBOARD_URL } from "../routes";

    export const handleLoginRouting = (accountType: "personal" | "company" | "practitioners" | "") => {
        switch (accountType) {
            case 'personal':
                window.open(PERSONAL_DASHBOARD_URL, '_blank');
                break
            case 'company':
                window.open(COMPANY_DASHBOARD_URL, '_blank');
                break
            case 'practitioners':
                window.open(PRACTITIONERS_DASHBOARD_URL, '_blank');
                break
            default:
                window.open(PERSONAL_DASHBOARD_URL, '_blank');
        }
    }