import { toast } from 'react-toastify';

const notifySuccess = (msg: string) => {
    toast.success(msg, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,            
    })
}

const notifyError = (msg: string) => {
    toast.error(msg, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
    })
}

export {notifySuccess, notifyError}