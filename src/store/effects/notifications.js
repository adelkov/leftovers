import {NotificationManager} from 'react-notifications';

export const notify = (type, message = "") => {
    switch (type) {
        case 'info':
            NotificationManager.info(message, "Info: ");
            break;
        case 'success':
            NotificationManager.success(message, "Success: ");
            break;
        case 'warning':
            NotificationManager.warning(message, "Warning: ");
            break;
        case 'error':
            NotificationManager.error(message, 'Error');
            break;
        default:
            NotificationManager.info(message, "Info: ")
    }
};

export const types = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
};

